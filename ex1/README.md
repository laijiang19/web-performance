# Instructions

1. Make sure you have the YSlow plugin installed for your browser. Go here: http://yslow.org

2. Think of at least 3 web URLs. Try to choose one that's a popular site (Yahoo, Microsoft, etc), and a few that are less well known.

3. Test each site using YSlow. Jot down the score (letter and number) that each site gets from YSlow. Make sure to clear your cache in between each test.

www.sodocanjs.com - B 82
www.amazon.com - B 84
www.newyorktimes.com - C 71
speckjs.github.io - B 87

4. Pick one of the sites, preferably one which has issues (gets a C grade or lower), and examine the feedback that YSlow gives for each of the rules. Pick the 2 or 3 worst problems and jot down some ways the site could address those problems.

www.newyorktimes.com has a grade of C and score of 71. 
Grade F on Use a Content Delivery Network (CDN): 78 static components that are not on CDN;
Grade E on Minify JavaScript and CSS: There are 5 components that can be minified;
Grade F on Reduce the number of DOM elements: There are 3270 DOM elements on the page;

5. Be prepared to share your results with the class. :)