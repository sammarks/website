---
title: Adding ZenHub estimates to Google Sheets
date: 2020-05-01
summary: Create a formula inside Google Sheets to use the ZenHub API to pull issue estimates into
  your Google Sheet.
---

This is a follow-up to my [previous article](../automatically-syncing-github-issues-google-sheets/)
on how to automatically sync Github issues to Google Sheets.

[[point | What's the point?]]
| If you're automatically syncing your Github issues with Google Sheets and you use ZenHub
| internally to keep track of roadmaps, milestones, and other agile-related goodness, you may want
| to communicate your estimated issue complexities to your ops team through Google Sheets.

I've personally been using [ZenHub](https://www.zenhub.com/) for quite some time, and have made
myself at home with the Kanban-like boards for managing issues, planning milestones, reporting
burndowns, and all other sorts of reporting goodies related to team productivity and organization.
After setting up a CloudFormation stack to automatically sync my Github issues with Google Sheets, I
wanted to pull in the estimates from ZenHub to be able to communicate the complexity of issues to
the rest of the executive team so they could refer to those when determining priorities.

Luckily, with custom scripts support in Google Sheets and the [ZenHub
API,](https://github.com/ZenHubIO/API) this was pretty easy! In this article, we'll be setting up a
custom Google Drive Script and attaching it to a Google Sheet. Then we'll be calling that script in
the form of a formula function from our spreadsheet.

[[warning | <icon-warning>Watch out for ZenHub API Limits]]
| Unfortunately, if you have a large number of issues you're pulling estimates for, you may run
| into ZenHub API limits. I haven't found a way around this so far, but the data refreshes
| *eventually.*

Let's start by creating a new script. From your Google Sheet, go to the top and hit **Tools → Script
Editor.** This will open a new tab with the script editor for your current project. A file called
`[code.gs](http://code.gs)` will already be created for you, so let's go ahead and clear out the
contents of that file and start with our shell:

```jsx
var zenhubToken = 'aaaaa'

function zenhubEstimate (issueId, repositoryId) {

}
```

Let's start by configuring the `zenhubToken`. Follow the [authentication instructions in the ZenHub
API documentation](https://github.com/ZenHubIO/API#authentication) for how to generate your own
token, and then enter that token here. Since this is a private Google Sheet, I'm not too concerned
about storing this token in plain-text.

Now that we've got our token in place, let's get down to the nitty-gritty:

```jsx
function zenhubEstimate (issueId, repositoryId) {
  var response = UrlFetchApp.fetch('https://api.zenhub.io/p1/repositories/' + repositoryId.toString() + '/issues/' + issueId.toString(), {
    headers: {
      'X-Authentication-Token': zenhubToken
    }
  })
  return (JSON.parse(response).estimate || {}).value
}
```

And there it is! Just a simple fetch request to the ZenHub API to get information on the issue
passed to this function, and returning the estimate value if there is one.

**But there's a problem.** ZenHub has support for configuring Epics. Epics can have their own
individual estimate, and then they have an overall estimate calculated as the sum of the estimates
of all of the issues included in the epic. In our spreadsheet, we're more concerned with the *total*
estimate for the epic instead of the individually-assigned estimate. Because of this, we need to do
some extra-special magic:

```jsx
function zenhubEstimate (issueId, repositoryId) {
  var response = UrlFetchApp.fetch('https://api.zenhub.io/p1/repositories/' + repositoryId.toString() + '/issues/' + issueId.toString(), {
    headers: {
      'X-Authentication-Token': zenhubToken
    }
  })
  // highlight-start
  if (JSON.parse(response).is_epic) {
    var epicResponse = UrlFetchApp.fetch('https://api.zenhub.io/p1/repositories/' + repositoryId.toString() + '/epics/' + issueId.toString(), {
      headers: {
        'X-Authentication-Token': zenhubToken
      }
    })
    return (JSON.parse(epicResponse).total_epic_estimates || {}).value
    // highlight-end
  } else {
    return (JSON.parse(response).estimate || {}).value
  }
}
```

Since the issue response includes a flag for whether or not the issue was created as an epic, we can
use that flag to query for more information about the epic, and then return that estimate instead.

Now, that's it! Our function is complete. In order to use it, we'll need the issue ID as well as the
ZenHub repository ID. The issue ID is just your good ole' classic Github issue ID. The repository ID
is a little trickier.

The best way I've found to get that is to go to ZenHub, and use the **Repos** filter on your board.
Select only the repo you're interested in the ID for. Once you do that, the URL of the page should
update to include something like `?repos=12345` at the end of it. That's your repository ID.

Once you have both the repository ID and the issue ID, it's just a simple formula call:

```
=zenhubEstimate(120, 12345)
```

Feel free to generate those values from other cells, or any other formula magic you can muster.

[[success | <icon-success>You've done it!</icon-success>]]
| Now your Google Sheet is pulling in ZenHub estimates for Github issues automatically. Try
| expanding the function to pull in other data from the ZenHub API response as well.
