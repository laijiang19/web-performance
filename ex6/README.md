# Instructions

## UI Thread

1. Open "ex6.thread.html" in your browser, preferably Chrome. Watch the behavior of the page, especially as the "Fib(..)" gets higher. Do you notice anything happening to the animating picture? NOTE: If not, find `MAX_FIB` in the "thread.js" file, and change it to something a little higher than the default of `40`. Up it by 3 or so each time until you can see the animation being affected.

2. Look at how the structure of the updating of the Fibonnaci number output is happening, using `requestAnimationFrame()` and `setTimeout()`. Do you recall from earlier in the workshop why we would structure it this way? What would happen if we were not using `requestAnimationFrame()` here?

3. We know that a Web Worker can run the long-running Fibonnaci generator (it's long running mainly because it's a naive recursive algorithm!) in a separate thread. How would that impact the performance of this page?

4. Find the commented out line which instantiates the Web Worker, and references "ex6.fib.js". Uncomment it. Now, find the "Question" comment in `updateFib()`, and see if you can change that code  to calculate the Fibonnaci using the worker. NOTE: Some browsers won't load workers if you're viewing the page in a "file:///" context, so you'll need to view the "thread.html" via "localhost" (like with `python -m SimpleHTTPServer 8080`, etc) for this part to work.

5. With your worker changes in place, re-run the "thread.html" page, and note any differences in the performance of the page (the animation, etc).


## Garbage Collection

1. Open "ex6.gc.html" in your browser, preferably Chrome. Watch the behavior of the page, specifically the "Fetching..." indicator. Do you ever see hiccups where it isn't smoothly "animating"? What do you think is causing that?

2. If you're using Chrome, open the developer tools, and make sure you can see both the browser window and your devtools.

3. Switch to the "Timeline" tab. Highlight the "Memory" sub-tab, then click the "Record" button (little gray circle) down below, and let it run for a minute or two. What do you notice about the memory graph being displayed? Can you correlate anything that's happening in the graph with what you see visually?

4. This example isn't creating much memory to be GC'd (only about 2-3MB worth), but what do you think would happen in a more complex application that was creating and releasing lots of DOM elements and JavaScript objects? What visual problems might you see in that scenario?

5. Examine the code in "ex6.gc.js". Identify places where the code is creating and releasing DOM elements and/or JavaScript objects. Can you modify the code so less of that is happening? Check your work by repeating step 4 and comparing what you see in the memory graph.
