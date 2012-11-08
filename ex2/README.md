# Instructions

1. Make sure you have the YSlow plugin installed for your browser. Go here: http://yslow.org

2. In some browsers/configurations, YSlow will not run against local files (file:///...), so you will need to serve up the files via a web interface. If you have a recent Mac, you can do `python -m SimpleHTTPServer 8080` in this directory and then access via your web browser. You could also use Apache, or node.js (using something like Express to serve the files).

3. Open "index.html" in your browser, with YSlow running, and record the overall grade and score, as well as the individual rule grades/scores. This is your performance baseline.

4. Using the results from the YSlow report, identify what areas you can improve, using what you've learned so far in the first two workshop sections. Prioritize your list of optimizations based on the order of rules listed in the YSlow plugin. Make your changes/optimizations one at a time.

5. Hints:
 * Using the tool(s) we've learned about, how can you reduce the number of image, CSS, and JS files?
 * Are the CSS and JS files referenced and located properly in the HTML markup?
 * Would any of the images benefit from being inlined?

6. After each change that you make, re-run your page through YSlow, and take note of the differences. Did your changes help your score as you expected? If not, why, do you think? Did any of your changes hurt your score? Why, do you think?

7. Don't ignore a YSlow rule grade of "A". It may have found something you need to fix, but it wasn't bad enough to drop the grade (yet). Look at all rule results. Also, some conditions exist in the markup which YSlow very well may not find (minification, duplicates, etc). Fix those anyway, regardless of YSlow reporting it or not. :)
