---
title: Automatically deleting PostgreSQL databases matching a pattern.
date: 2020-06-10
summary: Create a simple bash script to query PostgreSQL for a list of databases matching a specific pattern, and delete them automatically.
---

This is a follow-up to [Setting up database connections with Knex and Jest.](../setting-up-database-connections-knex-jest)

[[point | What's the point?]]
| A common approach to isolating your unit-tests that create records in a database is to create a
| database for each suite or worker process running a suite. If the tests don't properly clean up
| after themselves every single time, this could result in a lot of unused databases. Let's remove
| them automatically.

In the previous article, we worked on setting up database connections with Knex and Jest. Basically, we created an environment that spins up a new database at the start of each Jest worker, truncates it after each test, and destroys it after all of the tests have been run.

The problem with this approach is sometimes tests fail, or you cancel the execution of the suite. When this happens, sometimes the suite isn't cleaned up properly and that database lingers around. This is annoying because now whenever you login to your database manager to query for some juicy data, you've got all of these extra databases sitting around wasting valuable screen space.

So, let's get rid of them!

Since the script we wrote just generates UUIDs as the names of the test databases, we should be able to just delete all databases where their name matches a UUID regex. So all we need is a script to query PostgreSQL for the current list of databases, filter that list based on the UUID regex, and then delete each database.

[[warning | <icon-warning>This has been written assuming you're using zsh.</icon-warning>]]
| Not everyone is using zsh. The script might still work for you without any issue, but you may
| have to make some modifications to get it working in good ole classic bash.

And here is that lovely script:

```shell
#!/usr/bin/env zsh

PATTERN=${2:='%-%-%-%-%'}

psql -c "copy (select datname from pg_database where datname like '$PATTERN') to stdout" | while read line; do
  echo "$line"
  dropdb "$line"
done
```

And that's it! It's a pretty simple little script.

First, we define the pattern (this will use the `like` operator inside PostgreSQL) to look for a string with 4 groups of characters, separated by a dash. That will definitely match any valid UUID.

We then run a query to list the database names from PostgreSQL that match the pattern, and then call the [dropdb](https://www.postgresql.org/docs/9.1/app-dropdb.html) command on them. This command comes with any standard PostgreSQL installation, so luckily we don't need to write any extra query magic!

Before dropping the database, I just echo the name of the database so I'm aware of what I'm dropping.

**But there's a problem.** I probably want to be able to approve the names of the databases that are being dropped before performing the operation, so I don't accidentally remove something that I don't mean to. So let's update the script to accomplish this:

```shell
psql -c "copy (select datname from pg_database where datname like '$PATTERN') to stdout" | while read line; do
  echo "$line"
  // highlight-start
  if [ "$1" = "yes" ]; then
    dropdb "$line"
  fi
  // highlight-end
done
```

Now, the script only actually drops the databases whenever you call it with "yes" after the name of the command. This means you can call it by itself first, verify the list of databases it's going to delete, and then call it again with the "yes" argument.

[[info]]
| I opted to use the "yes" argument instead of confirming after every single database because there
| could potentially be a very large list of databases depending on how long it's been since you
| last ran the command.

Okay! So take that fancy script, and put it somewhere on your machine where you'll be able to remember where to call it. For me, I put it in `/usr/local/bin/cleandbs`.

Make sure to also give it execution permissions!

```bash
chmod a+x /usr/local/bin/cleandbs
```

Then, to get the list of databases the script will delete *(but not actually delete them),* just run `cleandbs` in your terminal. Review the list, make sure it's not going to delete anything crazy, and then run `cleandbs yes` to actually delete them.

If you notice that the script is trying to delete databases you're wanting to keep, try adjusting the `PATTERN` variable inside the script to be something more appropriate.

[[success | <icon-success>You've done it!</icon-success>]]
| Now you've got a quick little script you can call every time you want to clean up your databases.
| You could even register it as a cron job to have it run automatically every week to make sure
| your list of local databases is *always* clean.
