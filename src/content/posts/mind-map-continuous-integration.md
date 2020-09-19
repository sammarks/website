---
title: Mind Map and Continuous Integration
summary: Stop trying to remember how to deploy your service. Let the CI do it, and free up your
  brain space for more important things.
date: 2020-09-16
---

[[point | What's the point?]]
| Don't try to keep your entire deployment procedure in your head, pulling it out of the depths of
| your brain every time you want to deploy. Use a CI instead, and stop stressing over how to deploy
| your service.

This post is going to be a little bit different. Gone are the days of "here's a cool way to automate
a part of your workflow using some open source library I made," in are the days of<br />
🌈&nbsp; *philosophical discussions.* 🌈

For this philosophical discussion, we'll talk about releasing to production, inevitably on a Friday
afternoon at 5pm because, let's face it, you're a rebel 🤘

I'm gonna walk us through an example, one that might be all-too-familiar. You have a fancy deploy
script inside your application's repository to deploy the entire backend server cluster to
production. Let's say you've been responsible and use infrastructure-as-code, so you don't have to
try to connect to servers manually and copy / paste files over.

On Friday at 5pm, you run that magical script and start fiddling with your lucky pen as you watch
the lines of potentially-devastating instructions scroll across the screen. Your pulse quickens as
you reach the end of the process, and 🎉 &nbsp;it's all deployed. You breathe a sigh of relief and
get some celebratory Panda Express on the way home.

It's only in the middle of your binge-watching session of the latest Bachelor episode when your
phone rings in the middle of your 20th scoop of cookie dough. On the other end of the line is your
swift reminder of the terrible grasp of reality.

**Your entire production stack is down.**

Okay, maybe not *that* catastrophic, but at least an entire section of your application is throwing
an error because, guess what, you forgot an environment variable when you were deploying your code.
You thought you were being secure and responsible by not storing the environment variable values in
a plain-text file in your repository, so you've kept them all in a secure location on your computer,
the location of which is located up in your trusty noggin.

The problem with your trusty noggin: **it's not so trusty.**

# Stop trying to store the entire StackOverflow archive in your head.

Let's talk about that. But first, let's make sure we've nailed the point home with another example.

You remember that After Effects extension you created back in fall '18? It's a simple one. It copies
and pastes images inside and outside of After Effects, because for some strange reason the software
lacks that functionality in the first place.

You released it and developed an entire deployment process at the time in order to package it up and
get it to the store to share, and you were damn proud of this deployment process. But there's one
glaring thing wrong with that deployment process: **you didn't write any of it down.** Don't worry,
you think to yourself at the time, there's no way you'll forget how to deploy this thing.

Now we're in fall 2020. The extension has done well, and has worked for most. There are a few bugs
that have been reported in the last few months that desperately need fixing. You pop open that
codebase, fix the bugs, test it on your local machine and verify it all works. You're ready for the
release, and then you open the README.

![https://media.giphy.com/media/3oFzlXt9uTYFwrniPC/giphy.gif](https://media.giphy.com/media/3oFzlXt9uTYFwrniPC/giphy.gif)

Yep, there's nothing in there.

In your infinite wisdom at the time, you created all of these wonderful deployment scripts, **but
you didn't write down how to use them, or what kind of environment variables are required to even
get them to work.**

*Nice one.*

Now we can revisit our original statement.

# Stop trying to store the entire StackOverflow archive in your head.

Now let's talk about Continuous Integration. It's the service you have enabled that automatically
runs your unit tests (because you're responsible and write those) to make sure everything is
working. It's that service that causes tension on GitHub as you wait for the results to come back,
and developer rage when inevitably come back with a tiny linter error where you missed a space on
line 45 of whatamidoing.js.

Personally, I would prefer my rage be induced by [CircleCI,](https://circleci.com/) but there are
other providers out there.

**But CI does more than just run your unit tests and linters against your PRs.** Let's revisit the
our original statement. You think to yourself: *of course I know not to try and store the entire
StackOverflow archive in my head. That's impossible. And moreso, it's just silly.*

**So why are you trying to store your entire deployment pipeline in your head?**

If your project is reasonably sized, you can automate your deployments, and you might be deploying
often or at points in the future where you don't remember the flow, **it makes sense to use a CI
service to deploy your code.**

Yep, that's it. That right there ☝️ would be the entire point of this article. I just thought I
would share.

# How I use CircleCI to deploy my code.

I actually have the backend and frontend components of each of the products I work on in a single
monorepo, *because I'm hip.*

And really, having everything in one repository is actually pretty helpful when it comes to
automating your deployment! Even if all of my repositories had automated deployments with CI, I
would at least have to go to each one individually and run the command to create the tag that
triggers the deployment.

But I would either have to wait for the server to finish deploying before tagging the frontend
components and triggering their release, or I would have to furiously cancel the frontend deployment
if something caused the server deployment to fail, lest I anger the users.

So, with those painful memories in the back of my head, I designed the deployment process for this
monorepo to solve for that.

**First, I use "hold" steps inside the workflow to make sure everything is kosher before the actual
deployment begins.** The first part of the workflow builds the code, runs unit tests, runs the
linter, and generally tries to catch any glaring errors pretty early. Once that succeeds, the
workflow waits for my approval. I give each of the earlier steps a quick glance to make sure
everything looks okay, and then give my final approval (luckily, CircleCI notes *who* approved the
workflow, so if I completely break the production environment with my fix I didn't test because "it
totally has to work," everyone knows).

**Second, I design the workflow to deploy the frontend once the server deployment succeeds.** Once
that final approval happens, the deployment to the backend server begins. Once those steps complete
successfully, the deployment to the frontend environments begins. If anything goes wrong, the entire
build fails and I'm notified of it to fix it. After everything turns green, I give the production
environment a quick run-through to make sure everything turned out just spiffy and go get my
celebratory Panda Express.

And with that, I don't have to worry about how to deploy the application to production or any
updates to my local machine causing minor variations in how the code is packaged and thus breaking
the entire production app. I can also completely abandon the project for three years, come back to
it, and do a deployment to production without giving it a second thought.

By keeping all of my deployment information in a CI workflow, I've freed up my brain space for
things that matter, like pushing new features, and I've eliminated an all-too-common source of human
error.

And by the way, *if the examples given in this post seem a little bit too realistic to be made up,
it's because they're not (except maybe the Bachelor reference).*

[[success | <icon-success>Stop trying to remember how to deploy your application.</icon-success>]]
| At the end of the day, treat your deployment process like you'd treat a resource like
| StackOverflow. Don't keep the entire thing in your head. If you do, you'll likely end up
| forgetting things and implementing processes improperly. If the process can be automated,
| **automate it and forget it.**
