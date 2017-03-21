# Calendar
Reads calendar data from an OrgSync RSS feed and displays the data in the format used on the Boston College website.

The purpose of this code is to allow an existing calendar design to the work with the public RSS feed provided by OrgSync's calendaring functions. The feed to be used is specified within the HTML - see one of the provided example HTML files.

There are two possible layouts for the calendar: horizontal, as seen on https://www.bc.edu/bc-web/schools/law/ and vertical as seen on https://www.bc.edu/bc-web/schools/law/centers.html#column-par-1-bc_tabbed_content-tab-1. For each layout, CSS is provided by the site's style sheets. The purpose of this code is to produce HTML that matches the HTML produced by the primary calendar components, which rely on a different source of calendar data.
