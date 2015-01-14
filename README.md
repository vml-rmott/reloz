reloz
=====

A Chrome extension to re-color and modify JIRA® status lozenges.

A list of unresolved issues can sometimes be an overwhelming wall of yellow lozenges.  This browser extension watches for the "Blocked" status and styles it red.  This requires no changes to the server or project settings.

Behind the scenes this extension leverages DOM Mutation observation using Google's [Mutation Summary library][1].

While in the short term this could easily be extended to support multiple, configurable statuses and color combinations for more complex projects, a more sustainable solution would be to add your vote to [JRA-36241][2]!


[1]: https://code.google.com/p/mutation-summary/
[2]: https://jira.atlassian.com/browse/JRA-36241
