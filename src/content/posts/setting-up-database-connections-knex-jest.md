---
title: Setting up database connections with Knex and Jest
summary: Take advantage of parallelism in Jest tests, and prevent database cross-talk between tests
  by setting up a new test database for each Jest worker instance created.
date: 2020-04-29
---

[[point | What's the point?]]
| Take advantage of parallelism in Jest tests, and prevent database cross-talk between tests
| by setting up a new test database to connect to for each Jest worker instance created.
| It makes your tests take just a tad longer to run, but the isolation is totally worth it.

Jest is nice, and so is Knex. Jest's parallelism out of the box is *especially* nice, but you can
run into some problems if all of your tests are using the same database to run in. What happens if
you have two test suites using your users table at once? That's not really the best environment for
a test, because your tests could cause each other to fail randomly depending on the order data was
inserted, modified, or deleted. It's not great to have your tests battling each other in the
database!

So, let's just have each of the tests selfishly use their own version of the database. Simple
enough? We're gonna do a few things here: create a custom Jest environment based on
`NodeEnvironment` to setup and teardown our database, and then setup our Jest configuration to
automatically migrate the database before each test suite, and reset it after each test. This way,
we have a perfectly clean database for each test.

# Jest Environment

Let's start by installing some dependencies. We'll be using the `knex-db-manager` package to create
/ destroy the database each time, and we'll need `jest-environment-node` as our base:

```bash
yarn add -D jest-environment-node knex-db-manager
```

[[warning | <icon-warning>Assumptions!</icon-warning>]]
| I am assuming you already have `knex` and `jest` installed and configured.

Now, create yourself a fancy new `environment.js` file at the root of your project:

```jsx
const NodeEnvironment = require('jest-environment-node')
const knexConfig = require('./knexfile')
const { databaseManagerFactory } = require('knex-db-manager')
const Knex = require('knex')

class CustomEnvironment extends NodeEnvironment {
  async setup() {
    // We'll be putting some setup code in here.
  }

  async teardown() {
    // We'll be destroying the database here and closing connections.
  }

  dispose() {
    // We're not putting anything in here. This is just required to make Jest happy.
  }
}

module.exports = CustomEnvironment
```

Pretty straightforward! We just imported all the packages we're going to need, and setup the shell
of the environment class. We'll be setting up the database and the global Knex instance inside the
`setup()` step, and we'll be tearing everything down in the `teardown()` step.

Before we implement the `setup()` and `teardown()` steps, we'll need to tell `knex-db-manager` how
to connect to our database:

```jsx
const dbManager = databaseManagerFactory({
  knex: knexConfig,
  dbManager: {
    superUser: 'super-boi',
    superPassword: 'super-secure',
  }
})
```

For the database manager, just give it your knex config you imported from your `knexfile` (I'm
assuming you've already got this setup), and then tell it your super user's name and password (in
most of my tests, I just use the same user because I'm not concerned about permissions in my local
testing environment or in the CI).

Now that we've got the database manager ready, let's write the meat of the `setup()` step:

```jsx
class CustomEnvironment extends NodeEnvironment {
  async setup() {
    // highlight-start
    await super.setup()

    // Create the database.
    console.info(`[ENV] creating db ${knexConfig.connection.database}`)
    await dbManager.createDb()

    // Setup our Knex instance to share across the tests.
    this._knex = Knex(knexConfig)

    // Run our migrations.
    await this._knex.migrate.latest()

    // Setup global variables for the manager, database name, and Knex.
    this.global.dbManager = dbManager
    this.global.dbName = knexConfig.connection.database
    this.global.knex = this._knex
    // highlight-end
  }

  async teardown() {

  }
}
```

I've broken the setup step into three different parts:

- **Create the database.** This just calls the `createDb()` method on the database manager to
  actually create the database. It uses the database name configured inside the Knexfile (more on
  this later).
- **Setup the Knex instance.** In order for our tests to have access to the Knex instance bound to
  the generated database, we're setting it up in the environment and storing it in a global variable
  for use elsewhere.
- **Run our migrations.** Let's tell Knex to run our migrations to get our tables setup.
- **Setting the global variables.** Along with the Knex instance, let's allow the tests access to
  the database manager and the database name, if they need it. We also use the global variables
  inside the `teardown()` step later.

You'll notice we're referencing the `knexConfig.connection.database` setting, but wouldn't that be
the same if you just have a static file? Yes! Which is why we need to change that. Let's install one
more package, and then update our Knexfile:

```
yarn add -D uuid
```

And then let's update our Knexfile:

```jsx
const uuid = require('uuid/v4')
const databaseName = process.env.NODE_ENV === 'test' ? uuid() : 'database-name' // highlight-line

module.exports = {
  client: 'pg',
  connection: {
    // others...
    database: global.dbName || databaseName, // highlight-line
  },
}
```

We've done two things to the Knexfile to make this system work. First, if we detect that the current
environment is a test environment, we generate a random UUID for the name of the database. If it's
not a test environment, we use our real database name here: `database-name`.

On top of that, if we detect that `dbName` is defined inside the globals, we use that instead of the
randomly-generated database name or the actual database name. This allows us to use different
instances of Knex still connected to the proper database without having to pass the same instance
around or any config. The environment sets the database name in the globals, and we just update our
configuration to match if it's present.

So far, we have code in place to setup the database whenever the test worker begins, and we've
updated our Knex configuration to connect to the proper database when running our application code.
Now, let's handle cleaning things up:

```jsx
    this.global.knex = this._knex
  }

  async teardown() {

    // highlight-start
    // Destroy the Knex instance to clear all connections.
    console.info('[ENV] destroying db')
    await this._knex.destroy()

    // Delete the database.
    await dbManager.dropDb()

    // Close our database manager connections.
    await dbManager.close()
    await dbManager.closeKnex()

    await super.teardown()
    // highlight-end
  }

  dispose() {
    // Do nothing.
  }
}
```

The code we just added does a few things. First, it destroys the Knex instance that we've passed
around in order to close all current connections to the database. Then, we drop the actual test
database. Finally, we close the connections from the database manager. This is important because if
we didn't close these connections, we would quickly exceed the connection limits on our database.
And of course, at the very end we call the parent's teardown method to allow Jest to do its magic.

Now, update your Jest config to use the environment file you just configured.

# Jest Setup

Now that we've got the environment in place, let's modify our setup file to automatically truncate
the database at the end of each test.

[[info | <icon-info>Truncate vs Drop</icon-info>]]
| We *truncate* the database at the end of each test instead of *drop* because it's cheaper. If we
| dropped the database, we would have to re-create it and re-run all of the migrations before the
| next test. If we truncate, we're just clearing the tables, so we don't have to re-create the
| database or re-run all of the migrations for each test.

Create yourself a new `jest_framework_setup.js` file at the root of your project (and add it to
your configuration), and let's add the following to it:

```jsx
afterEach(async () => {
  try {
    await global.dbManager.truncateDb(['migrations'])
  } catch (err) {
    // Handle errors if you'd like...
  }
})
```

This just uses the database manager we assigned in the previous steps to truncate the database, but
we have to make sure not to truncate the `migrations` table. If we were to write a test to check the
rollback functionality of our migrations, it would throw an error if since it wouldn't have a record
of the migrations that had already completed.

[[success | <icon-success>And that's it!</icon-success>]]
| Give your tests a run, and with any luck each worker will be running with its own
| connection to the database.
