reloz
=====

A Chrome extension to re-color and modify JIRA® status lozenges.

A list of unresolved issues can sometimes be an overwhelming wall of yellow lozenges.  This browser extension watches 
for the "Blocked" status and styles it red.

Behind the scenes this extension leverages DOM Mutation observation using Google's [Mutation Summary library][1].  It 
will iterate over every `jira-issue-status-lozenge` it encounters and checks the text to decide what to do. This is
rather heavy-handed and there is a slight delay when the page loads before the re-coloring occurs.  If you are looking
at thousands of lozenges on a single page you might start having problems.

Setup
-----

This requires no changes to the server or project settings.  You might wish to lock down the URL permissions/matches of
 this extension to the path of your local JIRA installation(s); to do so modify `manifest.json` lines 10, 11, and 16.

Future
------
While in the short term this could easily be extended to support multiple, configurable statuses and color combinations 
for more complex projects, a more sustainable solution would be to add your vote to [JRA-36241][2]!


[1]: https://code.google.com/p/mutation-summary/
[2]: https://jira.atlassian.com/browse/JRA-36241
