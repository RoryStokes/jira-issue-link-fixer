// ==UserScript==
// @name Jira Issue Link Fixer
// @namespace http://www.agiledigital.com.au/
// @version      0.4.0
// @description  Issue links in Jira navigate directly to the issue page.
// @author       Rory Stokes
// @downloadURL   https://github.com/rorystokes/jira-issue-link-fixer/raw/master/jira-issue-link-fixer.user.js
// @updateURL     https://github.com/rorystokes/jira-issue-link-fixer/raw/master/jira-issue-link-fixer.meta.js
// @include /^https?:\/\/jira\.[a-z\.]*\/secure\/RapidBoard\.jspa\?/
// @grant        none
// ==/UserScript==

function fixLinks() {
  const elements = [...document.getElementsByClassName("ghx-key")];
  if (elements.length > 0) {
    elements.forEach(
      issue => (issue.children[0].onclick = e => e.stopPropagation())
    );
  } else {
    setTimeout(fixLinks, 100);
  }
}

fixLinks();
