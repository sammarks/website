---
title: Slack notifications from AWS Amplify deployments
summary: Setup simple Slack notifications for AWS Amplify deployments to let the rest of your team
  know when new releases are going out or when builds fail.
date: 2020-07-20
---

[[point | What's the point?]]
| Slack notifications for AWS Amplify deployments are incredibly useful for informing the rest of
| your team when new updates go out to your applications, or for informing your development team
| whenever a deployment fails. Setting up simple Slack notifications is easy with Lambda, SNS, and
| AWS Amplify.

[[gray]]
| **Just show me the code.** Check out [this gist](https://gist.github.com/sammarks/95a8da4ce7f7c7d21b1d3e1d648b319d) for the
| Lambda function source code.

[AWS Amplify](https://aws.amazon.com/amplify/) is a wonderful solution for deploying web
applications quickly (as long as you watch those bandwidth charges). Unfortunately, the only
solution they have for notifications at the moment is email-based, and the information sent through
that email is *less than lovely* to look at. Let's fix that!

At [Collabra,](https://collabramusic.com) we use Slack notifications to report on the current
status of deployments so the entire team is aware whenever something new goes out to staging or
production, or the engineering team is aware of when something fails to deploy. Since Slack makes
it incredibly easy to get going with automatic notifications through webhooks, I thought that would
be the perfect target for our Amplify notification Lambda.

# Setting up email notifications

To start, we're going to need to setup some email notifications.

[[info | <icon-info>But why? We're trying to get rid of email notifications.</icon-info>]]
| AWS Amplify actually uses SNS behind-the-scenes whenever setting up email notifications. Once you
| enable the feature for an email address, it just creates a new SNS topic on your account and
| subscribes that email address to it. Conveniently, we can also subscribe Lambda functions to that
| same SNS topic and remove the original email subscription later.

To start, go to the Amplify console inside AWS and select the project you want to get notifications
for. In the menu at the left, click the **Notifications** option. At the right, click **Manage
Notifications**, and then click the **Add Email** button. Type in some random email address (it
probably should be one you own), and then select a branch to get notifications for. Alternatively,
you can get notifications for all branches and then show the branch inside your Slack message (we're
not covering that here though).

Hit the **Save** button at the bottom, and then if you go to the SNS console you should see your
fancy new topic. It'll look something like `amplify_[some random string]_[branch]`. Go ahead and
click into that, and remove your email subscription, unless you want to keep it for debugging
purposes.

# Setting up Lambda

Now that we've got our new SNS topic setup, let's start setting up our Lambda function to ingest
these notifications and send them to Slack. Head over to Lambda, and create a new function (using
the scratch blueprint), and give it any creative name you fancy. Make sure you're using Node as the
runtime (in my case, I'm using Node 12). Once you're satisfied, click the **Create function**
button.

Once you create your function, you'll be taken to the edit page for it. Scroll down to the function
code, and it should look something like this:

```jsx
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
```

We're going to keep that basic shell, and add our beautiful logic inside it. This Lambda function needs to accomplish a few basic things:

- Get the incoming message from SNS
- Parse that incoming message to determine the current status of the deployment
- Prepare the message to send to Slack
- Send the message

Let's start by getting the incoming message from SNS (it's buried pretty deeply in the event):

```jsx
exports.handler = async (event) => {
	const sns = event.Records[0].Sns.Message // highlight-line
}
```

That's it! Amplify passes the message in as a simple string, not encoded in JSON or anything.

[[info]]
| If you would like to see more information on how the SNS event is structured, you can check out
| Amazon's documentation [here.](https://docs.aws.amazon.com/lambda/latest/dg/with-sns.html)

Now that we've got the message, let's see if we can get the current status of the deployment from
it. AWS Amplify messages have something like the following structure:

> Build notification from the AWS Amplify Console for app: [link to app]. Your build status is
> [SUCCEED | FAILED | STARTED]. Go to [link to app] to view details on your build.

Easily parseable! We're basically just looking for that "Your build status is X" string inside the
message. Let's write some code inside our Lambda function to try and guess the current status and
form the Slack message based on that status.

```jsx
exports.handler = async (event) => {
	const sns = event.Records[0].Sns.Message

	// highlight-start
	let message = ''
	if (sns.includes('build status is FAILED')) {
		message = 'Release to My Fun Company **production** failed.'
	} else if (sns.includes('build status is SUCCEED')) {
		message = 'Release to My Fun Company **production** succeeded.'
	} else if (sns.includes('build status is STARTED')) {
		message = 'Release to My Fun Company **production** has started...'
	}
	// highlight-end
}
```

And there we have it! Now we're generating the proper message based on what AWS Amplify is telling
us, and just leaving message blank if they send us something weird (which shouldn't happen).

But just sending a message is boring. Let's add some color!

```jsx
exports.handler = async (event) => {
	const sns = event.Records[0].Sns.Message

	let message = ''
  let color = '' // highlight-line
	if (sns.includes('build status is FAILED')) {
		message = 'Release to My Fun Company **production** failed.'
		color = '#E52E59' // highlight-line
	} else if (sns.includes('build status is SUCCEED')) {
		message = 'Release to My Fun Company **production** succeeded.'
		color = '#21E27C' // highlight-line
	} else if (sns.includes('build status is STARTED')) {
		message = 'Release to My Fun Company **production** has started...'
		color = '#3788DD' // highlight-line
	}
}
```

Ah, that is going to look so much better, and it'll allow for team members to get the current status
through a quick glance instead of having to read the entire message.

Now that we've got our message and our color, we need to do something with them! Before dealing with
actually sending the message to Slack, let's get it setup in a quick JSON object [according to their
documentation.](https://api.slack.com/messaging/composing/layouts#attachments)

[[warning | <icon-warning>Attachments have been labeled "legacy."</icon-warning>]]
| At the time of writing this post, Slack has started to label attachments in messages as "legacy"
| and is encouraging users to switch to their new Blocks formatting. The message itself still
| works, but you may want to take on the task of modifying the code to use their new Block
| formatting if you so desire.

```jsx
	} else if (sns.includes('build status is STARTED')) {
		message = 'Release to My Fun Company **production** has started...'
		color = '#3788DD' // highlight-line
	}

	// highlight-start
	const data = JSON.stringify({
		attachments: [
			{
				'mrkdwn_in': ['text'],
				fallback: message,
				color,
				text: message
			}
		]
	})
	// highlight-end
}
```

Now we've got a nice simple Slack message ready to send to their API. We specify the message text,
the color of the message, and then the fallback text (to be displayed on push notifications, for
example). We also have to make sure to pass the uniquely-named `mrkdwn_in` flag to tell Slack we're
going to be passing Markdown-formatted text in our message.

For our last bit of code, let's send our message with Slack. Make sure to add the `https` require at
the top of the Lambda function:

```jsx
const https = require('https') // highlight-line

exports.handler = async (event) => {
```

And then add the code to actually send the request:

```jsx
	const data = JSON.stringify({
		attachments: [
			{
				'mrkdwn_in': ['text'],
				fallback: message,
				color,
				text: message
			}
		]
	})

	// highlight-start
	return new Promise((resolve, reject) => {

		// Prepare the request.
		const request = https.request(process.env.WEBHOOK_URL, {
			method: 'POST',
			headers: {
				// Specify the content-type as JSON and pass the length headers.
				'Content-Type': 'application/json',
				'Content-Length': data.length,
			}
		}, (res) => {
			// Once the response comes back, resolve the Promise.
			res.on('end', () => resolve())
		})

		// Write the data we generated from above and end the request.
		request.write(data)
		request.end()
	})
	// highlight-end
}
```

And there it is! Let's walk through the steps:

- First, we create a new promise to return from our Lambda function. AWS will respond to this and
  finish the Lambda function whenever the promise resolves.
- Next, we setup the request with the proper `Content-Type` and `Content-Length` headers.
- We use the callback from the `https.request` method to register our callback to resolve the
  promise whenever the response comes back.
- We write our data that contains the Slack message.
- Finally, we end the request to actually send it to Slack.

You may have noticed we're using a `WEBHOOK_URL` environment variable. That'll be our Slack webhook
URL, and we still need to configure that in order to get this Lambda function working. I decided to
include it in the environment variables instead of hard-coding it directly in the Lambda function
because a webhook URL is sensitive information, so we wouldn't want to include it in plain text.

# Configuring the Lambda function

Now we've got a (hopefully) working Lambda function! Let's setup our webhook with Slack and
configure that `WEBHOOK_URL` environment variable to get the whole thing working.

Follow [this guide from the Slack
documentation](https://slack.com/help/articles/115005265063-Incoming-Webhooks-for-Slack) to setup
your Slack webhook URL. If that doesn't do the trick, setting up a webhook URL is also a quick
Google away as that topic has been covered countless times.

Once you've got your Slack app setup, find your webhook URL. It should look something like this:

```
https://hooks.slack.com/services/[random-characters]
```

Copy that to your clipboard, and then go back to the Lambda console inside AWS where you were
editing your code. Underneath the code editor, there is a section called **Environment Variables.**
Click **Manage Environment Variables** inside that section, and then add a new environment variable.
Call it `WEBHOOK_URL` and then paste in the webhook URL you copied earlier as the value. Finally,
click **Save** at the bottom of the screen.

Now that we've got Slack connected, let's connect the Lambda function to SNS so that it can receive
messages. Back on the Lambda configuration page, head to the top of the screen underneath the
**Designer** section. To the left, there should be a button called **Add trigger.** Click that, and
then select SNS as the trigger.

After that's selected, you should be prompted to enter an SNS topic. Inside that box, just type
"amplify" and your SNS topic should show up in the list. Alternatively, you can just copy the name
of the SNS topic from the SNS console (where you deleted your email subscription) and paste that in
here as well.

Once you select the topic, click the **Add** button.

# Testing and Wrap-up

Alright, now we've got a Lambda function with some code to send a notification to Slack, as well as
a SNS topic configured with AWS Amplify to receive notifications and send those to Lambda. Let's
make sure it works!

AWS allows you to test Lambda functions directly inside the Lambda interface by providing some
payload that matches what you would be getting from SNS. So let's test our Lambda function to make
sure it works.

Back on the Lambda configuration page inside the AWS console, click the **Select a test event**
dropdown at the top-right corner. Then click **Configure test events**. You should see a box on the
screen with contents that look something like this:

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": "value3"
}
```

Let's clear that out, as that's not of any use to us. We can replace that with the sample `SUCCESS`
event I've included below:

```json
{
  "Records": [
    {
      "EventSource": "aws:sns",
      "EventVersion": "1.0",
      "EventSubscriptionArn": "arn:aws:sns:us-east-2:{{{accountId}}}:ExampleTopic",
      "Sns": {
        "Type": "Notification",
        "MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
        "TopicArn": "arn:aws:sns:us-east-2:123456789012:ExampleTopic",
        "Subject": "example subject",
        "Message": "blah blah Your build status is SUCCEED. Go to", // highlight-line
        "Timestamp": "1970-01-01T00:00:00.000Z",
        "SignatureVersion": "1",
        "Signature": "EXAMPLE",
        "SigningCertUrl": "EXAMPLE",
        "UnsubscribeUrl": "EXAMPLE",
        "MessageAttributes": {
          "Test": {
            "Type": "String",
            "Value": "TestString"
          },
          "TestBinary": {
            "Type": "Binary",
            "Value": "TestBinary"
          }
        }
      }
    }
  ]
}
```

You can basically ignore most of this JSON as it's a bunch of fluff that AWS sends with SNS messages
(just in case you need it). The only part we're really concerned about is the highlighted line, that
contains a little test snippet from AWS Amplify that we're checking against inside our code.

Once that's in there, give your test event a name inside the **Event name** field, and then click
**Create** in the bottom-right corner. Once your test event is created, click the **Test** button in
the top-right corner of the page.

You should see a blue box pop up at the top of the page with a spinner, and then hopefully a green
success box! Head to your Slack, and you should also see a success notification.

[[success | <icon-success>You've done it!</icon-success>]]
| Congratulations, you have a working AWS Amplify → Slack notification system. Hopefully one day
| this will be obsolete as AWS will add their own Slack integration, but until then, this will work
| just fine. Feel free to tweak the code and customize the Slack message to suit your needs as well.
