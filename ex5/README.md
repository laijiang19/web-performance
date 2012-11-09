# Instructions

1. Open up the "index.html" file in your browser (preferred Chrome). Follow the instructions and play around with the demo for a moment. Try clicking around fast (try getting more than one box to move at a time), and do a bunch of clicks. Notice if you see any animations that hiccup or lag.

2. Open up your browser's Developer Tools, if it has it. Chrome and Safari have good "Webkit Inspector" tools. Click on one of the box, make sure it's "highlighted" by the dashed border. Before clicking anywhere else, highlight that item in your devtools, so that you can see the currently applied CSS styles, as well as any calculated styles (particularly, the `left` and `top` CSS properties). Position your browser and devtools windows so you can see both at the same time.

3. Now, click back somewhere in your browser to cause the highlighted box to move. Watch the CSS styles closely as you do, and as it moves. What did you notice? How do you think this animation was working?

4. Open up "ex5.css", and uncomment the `.elem.moving` snippet, and save the file. Now, open up "ex5.js", and find the `setNewPosition()` function. Comment out the current snippet of code, and uncomment the other code in that function. Save that file.

5. Now, repeats steps 2 and 3, and note any differences in what the devtools reports to you.

6. Close the devtools window, and repeat step 1, and compare the performance of the animations. Do you notice any differences? Are the animations smoother or more jerky? Are the animations more or less likely to hiccup/lag?

7. Go back to the CSS and JS files, and look closely at the two code options you've tested. What differences do you see? Note any observations you have about either set of code.
