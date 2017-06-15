# Calendar
Pulls event data from a Yale Connect (OrgSync) RSS feed and displays a pretty vertical or horizontal calendar.  Modified by [Sean O'Brien](http://oiss.yale.edu/about/oiss-staff/sean-obrien) from work by the [Boston College Law Library](https://github.com/BCLawLibrary/calendar).

This code is used by Yale's [Office of International Students and Scholars](http://oiss.yale.edu) (OISS) to display events created in Yale Connect on the OISS Drupal website.

## Examples:

* [Vertical - OISS Events Calendar](http://oiss.yale.edu/calendar)
![Screenshot](https://github.com/seandiggity/yale-connect-calendar/raw/master/screenshot-vertical.png)

* [Horizontal - OISS Programs & Events landing page](http://oiss.yale.edu/programs)
![Screenshot](https://github.com/seandiggity/yale-connect-calendar/raw/master/screenshot-horizontal.png)

_TODO: Create a Drupal module.  In the meantime, the HTML can be used on a Drupal page in "PHP code" format, with JavaScript provided by the "JS Injector" Drupal module._


# Usage

## HTML
The easiest way to get up and running is to choose `vertical.html` or `horizontal.html` and then embed the page in `<iframe>` tags.  You will need to edit the HTML and change the RSS feed URL inside the `eventCalendar` div, where it says `feed=`. The URL will be something like:

`https://api.orgsync.com/api/v3/portals/abc123/events.rss?key=abc123&per_page=100&upcoming=true`

## JavaScript
The configuration for the display of the RSS feeds is found in `js/calendar-vertical.js` or `js/calendar-horizontal.js` for the vertical or horizontal calendars, respectively.   This JavaScript does string processing to make the descriptions pretty, truncate text, create hyperlinks, and format buttons.

**To create a "Register Here" button, follow this format at the end of your Yale Connect/OrgSync event description:**  

_Register Here: http://some-website-dotcom/some-webpage_

These scripts require [Boostrap](https://getbootstrap.com) and [jQuery](https://jquery.com/), which is included.

_TODO: Make the feed URL a config option._

_TODO: Add config options for vertical or horizontal, display choice, and register URLs._

## CSS
Edit the stylesheets `css/vertical.css` or `css/horizontal.css` to change the vertical or horizontal styles, respectively.

# Licensing
[Boostrap](https://getbootstrap.com) and [jQuery](https://jquery.com/) are released under the [MIT/Expat license](https://opensource.org/licenses/MIT).

This work as a whole is released under the [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html).  
  
_TODO: Add [JavaScript Web Labels](https://www.gnu.org/software/librejs/manual/librejs.html#JavaScript-Web-Labels) for LibreJS.  

