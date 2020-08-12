---
title: Syncing ZenHub pipelines with Github issue labels
summary: Automatically sync ZenHub pipelines with Github issue labels using AWS CloudFormation and Lambda.
date: 2020-08-12
---

[[point | What's the point?]]
| [ZenHub](https://zenhub.com) doesn't support syncing pipeline status back to Github labels by
| default. Since you might require this functionality in your project management workflow, they
| provide an API allowing you to do it yourself.

ZenHub is missing one key feature in my humble opinion: the ability to sync the ZenHub "status" back
with Github. By this I mean the ZenHub-specific features that Github does not yet have, like the
current pipeline of an issue.

**But who would use this?** [In another
article,](../automatically-syncing-github-issues-google-sheets/) I wrote about being able to sync
Github issues with Google Sheets in order to run some reporting on that data to share with other
stakeholders in the company. [I also wrote](../adding-zenhub-estimates-to-google-sheets/) about how
to pull in the current ZenHub estimate into Google Sheets, and noted in that article that ZenHub API
limits are pretty low, so you'll frequently run into them when working with a large(ish) amount of
issues.

I needed to sync the current ZenHub pipeline with that sheet in order to provide more specific
reporting, but was aware of this issue with API limits and thought it wouldn't work very well. So I
arrived at this solution! Just sync the current pipeline (only the ones I'm interested in) back with
Github through labels, and then sync those labels to Google Sheets using the script I've already
written.

So that's what we'll do here. Let's get started:

<github>sammarks/cloudformation-zenhub-github-label</github>

# Setting up the stack

First things first, let's make sure you have a Github token ready for use. If you followed along
with my article on syncing Github issues with Google Sheets, you'll already have one handy. If not,
no worries. Head to Github, then go to **Settings → Developer Settings → Personal Access Tokens**
and generate yourself a new access token. Make sure to enable the `repo` permission, and that's all
we really need. Keep this handy, because we'll be needing it later.

[[warning | <icon-warning>Vendor Lock-in Warning!</icon-warning>]]
| This repository was created (and this blog post was written) with AWS CloudFormation in mind, so
| all dependencies will be deployed through AWS. I might have a need to create a Docker-based
| alternative in the future, but in the meantime a PR is welcome if you tackle the issue yourself.

Let's get started with the AWS template. Go ahead and [click this
link](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=zenhub-github-label&templateURL=https://sammarks-cf-templates.s3.amazonaws.com/zenhub-github-label/template.yaml)
to launch a new CloudFormation template with the code we need. Once you do, you'll be taken to AWS.
Everything is already filled in for you on the first step, so go ahead and immediately click
**Next.**

Give your stack a funky-fresh original name at the top, and then let's check out our parameters.
We've got a debug parameter, a place for our Github token, and a place to specify which pipelines to
use.

For the debug parameter, if you want to enable debug mode (it creates a decent amount of log entries
so be careful not to have it on all the time), just put `cloudformation-zenhub-github-label` in this
field.

For the Github token parameter, paste in the Github token you created (or already had written down)
earlier.

Finally, the pipelines parameter is special. Put a comma-separated list of the pipeline names you
want to "watch." If a pipeline is "watched," any time an issue moves into the pipeline, a Github
label is created with a `zh:` prefix indicating the pipeline the issue is currently in. When the
issue moves out of that pipeline, the label is removed.

So let's go through an example. You've got three pipelines: Todo, Working, and Done. In this
parameter, you've provided "Todo,Working" as the value. Here's what happens:

- If you create an issue and put it in the Todo pipeline, this script will create a label called
  `zh:Todo` and add it to the issue.
- If you move that issue to the Working pipeline, the script will remove the `zh:Todo` label, create
  a new one called `zh:Working` and attach it to the issue.
- Finally, if you move it from Working to Done, the script will remove the `zh:Working` label. It
  will **not** create a `zh:Done` label because you didn't include "Done" in the list of pipelines
  to watch.

With all that out of the way, hit **Next** at the bottom-right corner of the page. Here you can add
some extra tags or any other information to your stack, but nothing here is required so let's hit
**Next** again at the bottom.

Again, nothing super important on this page; just reviewing the stuff we're about to create. Check
the three boxes inside the blue box at the bottom of the page, and then click **Create stack.**

Wait a few minutes for the magic to happen, and then we'll setup our connection with ZenHub!

# Connecting to ZenHub

Now we've got a stack deployed! But there's a rub: we don't have any way for ZenHub to *tell* the
stack that an issue has moved to another pipeline.

Thankfully, ZenHub has support for Webhooks inside their API! The stack we just created has an
**Output** that contains the API Gateway endpoint we're going to give to ZenHub as the webhook
endpoint.

[[info | <icon-info>What's an output?</icon-info>]]
| An output is a way to *retrieve* information from CloudFormation. Normally they're used so stacks
| can communicate with one another, but I found it to be a nice and easy way to have the API
| Gateway endpoint printed exactly how we should be giving it to ZenHub.

To get our output, go to the **Outputs** tab toward the top of the page when viewing your stack.
There should be one output listed: "APIEndpoint"

Copy the link inside the **Value** column to your clipboard, we'll be needing that in a minute.

Now, head to ZenHub. Click on your account in the bottom-left corner of the screen, and then click
**Manage Organizations** in the pop-up menu. On the page you should have been taken to, click on
**Slack & Integrations** in the left-hand sidebar.

Under the **Integrations** section, inside the **Select the service:** field, select **Custom.**
Then, search for the name of the repository containing the issues you want to sync the pipelines
for.

[[info | <icon-info>Each integration only supports one repository.</icon-info>]]
| If you have multiple repositories you need to sync, just repeat these steps for each one. You can
| use the same "APIEndpoint" output for each one as the Lambda function is smart enough to update
| the correct issue in the correct repository.

Once you've got your repository selected, give your integration a nice descriptive name, and then
paste the "APIEndpoint" value you copied to your clipboard earlier into the **Webhook URL** field.

Click **Add Integration** and you're good to go!

[[success | <icon-success>You've done it!</icon-success>]]
| You should have a working setup automatically syncing ZenHub pipelines with Github issue labels
| (and hopefully Google Sheets later). Give it a quick test by dragging an issue in between your
| pipelines, and in a few seconds you should see the label show up.
