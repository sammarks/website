---
title: Automatically syncing Github issues with Google Sheets
date: 2020-04-30
summary: By using a Lambda function that runs every bit on AWS, create a quick and dirty way of
  syncing Github issues to Google Sheets.
---

[[point | What's the point?]]
| In an organization, sometime other members on your time will need access to the state of your
| Github issues. By using a Lambda function that runs every bit on AWS, you can create a quick and
| dirty way of syncing Github issues to Google Sheets (and customizing to your whim), without
| paying for an expensive sync solution.

I have personally found Github to be a fantastic tool for managing my code and communication across
my engineering team. But there's a problem: in any organization, there are other stakeholders who
need to be kept in the loop on development progress against deadlines.

There are *plenty* of options available for communicating our progress to other members of the
organization, but I'm cheap. When I can let the operations team use their spreadsheet wizardry to
create an infinite amount of dashboards from the Github data, and let the engineering team focus on
engineering instead of reporting, why wouldn't I just roll my own solution?

So I did! And it's available on Github as a CloudFormation template so you can deploy your own
version of it. I'll show you how.

[[warning | <icon-warning>Provider lock-in warning!</icon-warning>]]
| You need an AWS account for this article. Unfortunately, I haven't yet updated the code to be
| provider-agnostic (though am open to a handy pull-request).

# Setting Up

For this tutorial, we'll be setting up a Google Sheet to act as the destination for the Github data.
Then, we'll setup a Google service account for the Lambda function to use to add information to that
sheet. Finally, we'll deploy the CloudFormation template that sets up the resources that perform the
syncing.

So let's go ahead and create that sheet. Just head to Google Drive and make yourself a fancy new
Google Sheet (no need to share it with anyone yet, don't want to spoil the surprise). Once you're
in, you should probably go ahead and make a new sheet, and give it a creative name like "Github
Issues." You may want to protect it so no one can muck with your data.

Take note of the Spreadsheet ID inside the URL. Here's where it is in the URL:

```
https://docs.google.com/spreadsheets/d/SPREADSHEET-ID/edit
```

Keep that spreadsheet ID somewhere; we'll need it for later.

# Creating the Service Account

Start by heading to the [Google Developers Console](https://console.developers.google.com/) so we
can setup your brand new project. You can create a new project by hitting the dropdown in the
top-left corner of the screen (to the right of the "Google APIs" logo), and then click **New
Project** inside that dropdown.

Give the project a fancy name, and then click **Create.** Then enable the Sheets API for your
project, so in the sidebar to the left, under **APIs & Services** select **Library,** and then
search for "Sheets" in the search field. Click on **Google Sheets API** and then click **Enable.**

Now that the Sheets API is enabled, we'll need to create the service account. There are other
methods of authentication, but this CloudFormation template only supports a service account since
it's the most secure method.

1. At the left side of the screen, click **Credentials.**
2. At the top of the page, click **+ Create Credentials,** and then click **Service Account.**
3. Give your service account a name, and take note of the Service Account ID it's been automatically
   assigned (you'll need this email address in a bit).
4. Click the **Create** button.
5. You should now be on the "Service account permissions (optional)" page. We won't be needing this
   feature for our project, so you can just hit **Continue** to skip this step.
6. Now we're on the final step, and at the bottom of the screen you should see a section titled
   **Create key (optional).** Inside that section, click the **+ Create Key** button.
7. Make sure the **JSON** type is selected, and then click **Create.**
8. A file should have been downloaded to your computer, make sure not to lose it!

Okay, so now we've got ourselves a fancy service account and support for the Sheets API enabled on
our project. Time to invite our service account user to the spreadsheet and allow them to edit.

Back inside your spreadsheet, share with that Service Account ID you wrote down in step 3, and make
sure to grant it edit permissions on the sheet (otherwise it won't really be useful!).

If you protected your sheets earlier to make sure no one fiddles with your data, you'll need to also
make sure the Service Account is allowed to edit the sheets you have protected.

Finally, let's take note of what we'll need from the service account in order to configure the
CloudFormation template. The template calls for the client email (this is the same email you invited
to the spreadsheet so we've got that), and the **private key.** This is inside that JSON file you
downloaded, so let's open it up. It'll look something like this:

```json
{
  "type": "service_account",
  "project_id": "github-sync-project",
  "private_key_id": "some-random-string",
  "private_key": "-----BEGIN PRIVATE KEY-privatekeystuffhere=\n-----END PRIVATE KEY-----\n", // highlight-line
  "client_email": "some-email@github-sync-project.iam.gserviceaccount.com",
  "client_id": "1111111111111111111",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-sync-sa%40github-sync-project.iam.gserviceaccount.com"
}
```

We're interested in the piece in the `private_key` field. Keep that somewhere safe, we'll need it
later.

# Create your Github authorization token

This part is a little more simple! Go to Github, login with your account, and then head to your
account settings. Toward the bottom of the sidebar, hit **Developer settings,** and then in the next
page, hit **Personal access tokens.**

At the top of the page, hit **Generate new token.** You might be asked to enter your password again,
so just do what the Github overlords have requested. Now you're on a screen asking you to set the
scopes of the token, and give it a name, great! Give it a *very* creative name, something like
`github-sheets-sync`, and then select the `repo` scope (that's the only one we need).

Then click **Generate token** at the bottom of the page, and copy your newly-generated token. Store
that in your safe-keeping for this project.

# Deploy the Stack

Then, [click here to launch the
stack.](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=github-sheets-sync&templateURL=https://sammarks-cf-templates.s3.amazonaws.com/github-sheets-sync/template.yaml)
You can also review the options over at the Github repository.

<github>sammarks/objection-graphql-relay</github>

Once you click that link, you'll be taken to the AWS Console where you might be asked to verify your
credentials. Once you login, you'll be taken to the "Create Stack" screen inside CloudFormation. All
of the stuff in the first step is filled out nicely for you, so just go ahead and hit **Next** at
the bottom.

Give your stack a creative name! Our very creative example is `github-sheets-sync`, see if you can
come up with something better.

Now for the parameters. Let's start with the most important ones, and then we'll move into
customizing the rest if your heart desires. Get out your Github token that you generated in the last
section, and put that in the **GithubToken** field.

Then, paste the email address you copied from the service account section into the
**GoogleClientEmail** field. Now take the private key you copied, wrap it in quotes, and put it in
the **GooglePrivateKey** field. The result should look something like this: `"-----BEGIN PRIVATE
KEY-----\nabddfd..."`

**Quotes are important!** It's pretty important that you add the quotes, so we can make sure Amazon
doesn't fiddle with our private key. If you don't include the quotes, the whole thing is pretty much
guaranteed to not work.

Inside the **SpreadsheetId** field, paste the spreadsheet ID you copied way back at the very
beginning of this article. Inside the **SheetName** field, type in the name of the sheet you want
the Github issues to be inserted into.

Finally, inside the **Repository** field, type in the name of the repository you want to sync, in
the format of `owner/repository`

**You'll need to deploy the stack multiple times to sync multiple repositories.** I know, I'll get
around to it. If you want to do my work for me, you can submit a PR!

# Customizing

If you're an eager beaver and want to jump straight into syncing your fancy issues, feel free to
skip over this part. By default, the stack syncs all issues with the "reporting" label, and syncs
both open and closed issues. It also syncs every 30 minutes, Monday - Friday, during reasonable(ish)
daytime hours.

If you want to change the cron specification for how often to sync, update the **UpdateSchedule**
field. This field accepts a [CloudWatch
ScheduleExpression,](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html)
so if you wanted to sync every hour, 24/7, you would put in something like this: `rate(1 hour)`

If you only want to sync open issues, just change **State** from "OPEN,CLOSED" to just "OPEN"

If you want to sync with a label other than "reporting," just update the **Labels** field.

# Finish and Test

Once you're done making all of your customizations, hit the **Next** button at the bottom. Nothing
is really relevant to us on the next screen, so just hit **Next** again. Then scroll wayyyy to the
bottom, check all of the checkboxes inside the blue box (this is just to make sure you know what
you're doing, and that this stack assigns some permissions to itself to be able to run, etc). Then
hit **Create Stack.**

Then you're taken to your stack screen, so now you get to watch and hope the cogs at AWS are
turning! Wait until the stack is created, and then we're done. At this point, you could just wait
your 30 minutes or whatever time interval you've configured and check the Google Sheet to make sure
the issues are synced, but if you're impatient and want to test manually, keep going.

Head over to **Lambda** using the **Services** dropdown at the top. Find the Lambda function our
fancy stack just created. It should be called something like `github-sheets-sync-xxxx`. Give it a
click.

At the top-right corner of the page, there is a dropdown and a button called **Test.** Click on the
dropdown, and then click **Configure test events.** Make sure **Create new test event** is selected
toward the top of the screen, and then fill out something creatively random for the **Event name**
field. For our creatively random name, we chose "test." No need to pay attention to the **Event
template** field, it has no use for us.

Click **Create** at the bottom of the dialog, and then hit that **Test** button. A panel will pop up
saying your magical function is currently running, and then should hopefully turn green. Then check
your spreadsheet, and your issues should be there!

If you run into some issues, head back to the CloudFormation service and check the values you
entered inside the stack to make sure they're correct. Otherwise, [check the issue
queue](https://github.com/sammarks/cloudformation-github-sheets-sync/issues) and see if someone else
has had the same problem.

[[success | <icon-success>You've done it!</icon-success>]]
| The Lambda function you've deployed will continue to run during business hours (you can update
| the configuration inside the AWS console), syncing your Github issues with the Google sheet. Hand
| that over to your ops team and go get yourself a much-needed celebratory snack.
