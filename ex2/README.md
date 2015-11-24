# Instructions

1. Make sure you have the YSlow plugin installed for your browser. Go here: http://yslow.org

2. In some browsers/configurations, YSlow will not run against local files (file:///...), so you will need to serve up the files via a web interface. If you have a recent Mac, you can do `python -m SimpleHTTPServer 8080` in this directory and then access via your web browser. You could also use Apache, or node.js (using something like Express to serve the files).

3. Open "index.html" in your browser, with YSlow running, and record the overall grade and score, as well as the individual rule grades/scores. This is your performance baseline.

* Grade: F 
* Overall performance score 49
* Grade B on Make fewer HTTP requests
* Grade F on Use a Content Delivery Network (CDN)
* Grade F on Avoid empty src or href
* Grade F on Add Expires headers
* Grade F on Compress components with gzip
* Grade E on Put CSS at top
* Grade B on Put JavaScript at bottom
* Grade A on Avoid CSS expressions
* Grade n/a on Make JavaScript and CSS external
* Grade A on Reduce DNS lookups
* Grade A on Minify JavaScript and CSS
* Grade A on Avoid URL redirects
* Grade A on Remove duplicate JavaScript and CSS
* Grade A on Configure entity tags (ETags)
* Grade A on Make AJAX cacheable
* Grade A on Use GET for AJAX requests
* Grade A on Reduce the number of DOM elements
* Grade A on Avoid HTTP 404 (Not Found) error
* Grade A on Reduce cookie size
* Grade F on Use cookie-free domains
* Grade A on Avoid AlphaImageLoader filter
* Grade A on Do not scale images in HTML
* Grade A on Make favicon small and cacheable

4. Using the results from the YSlow report, identify what areas you can improve, using what you've learned so far in the first two workshop sections. Prioritize your list of optimizations based on the order of rules listed in the YSlow plugin. Make your changes/optimizations one at a time.

5. Hints:
 * Using the tool(s) we've learned about, how can you reduce the number of image, CSS, and JS files?
 * Are the CSS and JS files referenced and located properly in the HTML markup?
 * Would any of the images benefit from being inlined?

6. After each change that you make, re-run your page through YSlow, and take note of the differences. Did your changes help your score as you expected? If not, why, do you think? Did any of your changes hurt your score? Why, do you think?

7. Don't ignore a YSlow rule grade of "A". It may have found something you need to fix, but it wasn't bad enough to drop the grade (yet). Look at all rule results. Also, some conditions exist in the markup which YSlow very well may not find (minification, duplicates, etc). Fix those anyway, regardless of YSlow reporting it or not. :)

* reordered css file loc (now on top)
* reordered js file loc (now at bottom)
* minified js files
* changed image loading from css to inline for static images

