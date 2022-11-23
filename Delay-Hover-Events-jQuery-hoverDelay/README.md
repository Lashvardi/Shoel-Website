# jQuery.hoverDelay.js

Check the [demo page](http://ronency.github.io/hoverDelay/)

### What?
hoverDelay.js is a small and useful jQuery plugin that provides the very commonly wanted effect of "hover", but with configurable delay for the "in" and "out" events.

### Why?
For cases in which you want the hover functions to kick in only if the user really intended to enter/ leave your element, for example: Let's say you have a navigation menu, and hovering over a menu item opens its submenu items (which can be a heavy operation). In this case you probably wouldn't want the "hover" functions to act if the user only moved the mouse across your menu, but only if he stopped at a single menu item... That's what hoverDelay.js is for :-)

### How?
It uses the jQuery .hover() method, and wraps it with the logic that handles the delays, using referrences to the timeouts, and only if the threshold(s) are met, the callback is executed... 

See the [demo page](http://ronency.github.io/hoverDelay/)
