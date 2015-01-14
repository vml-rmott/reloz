// Copyright (c) 2014 VML / Ryan Mott
// $Date: 2014-04-30 15:37:55 +0500 (Wed, 30 Apr 2014) $
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var CLASS_PREFIX = "jira-issue-status-lozenge-";
var GREEN = CLASS_PREFIX + "green";
var YELLOW = CLASS_PREFIX + "yellow";
var BROWN = CLASS_PREFIX + "brown";
var RED = CLASS_PREFIX + "warm-red";
var BLUE = CLASS_PREFIX + "blue-gray";
var GRAY = CLASS_PREFIX + "medium-gray";
var TARGET = "Blocked";
var SELECTOR = "span." + YELLOW;

fixIt = function(e) {
    if (e.textContent == TARGET) {
        e.classList.remove(YELLOW);
        e.classList.add(RED);
    }
}

Array.prototype.slice.call(document.querySelectorAll(SELECTOR)).forEach(fixIt);

handleChanges = function(summaries) {
    summaries.forEach(function(summary) {
        summary.added.forEach(fixIt)
    })
}

var observer = new MutationSummary({
    callback: handleChanges,
    rootNode: document,
    observeOwnChanges: false,
    queries: [{
        element: SELECTOR
    }]
});

// function removeUppercase() { document.styleSheets[0].insertRule('.aui-lozenge { text-transform: inherit ! important; }', 0); }
// function removeBold() { document.styleSheets[0].insertRule('.aui-lozenge { font-weight: inherit ! important; }', 0); }
// function toggleSubtle(subtle) { Array.prototype.slice.call(document.querySelectorAll("span.jira-issue-status-lozenge")).forEach(function(e){e.classList.toggle("aui-lozenge-subtle", subtle);}); }

// if (document.querySelector('.aui-lozenge') != null) {}
