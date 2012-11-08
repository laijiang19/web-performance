# Instructions

1. Examine the code in "ex4.js". Jot down the inheritance relationships and the composition (mixin) relationships between the various classes.

2. Identify which classes have substantive OO behavior (inheritance, encapsulation, etc), and which ones are CINO (class-in-name-only), and could be simplified to just data. 

3. Modify the code in places you think make sense. Make sure after each change, you "test" the code to make sure it still works and still outputs what's expected.

4. Identify where inheritance is happening, and identify if you think the inheritance is useful or unnecessary in each case. Can you modify the code to not have inheritance/abstraction in those cases? What are the pros/cons? Try it out. Is the code better or worse off? Are the performance benefits worth it?

5. Identify places where CRUD (create-read-update-delete) type operations are (or can be) performed. For instance, how are entries added to the Address Book? How are people and addresses added to entries? How can you output the data stored in these data structures?

6. Imagine you needed to do bulk operations (like loading a big list of address book entries from a data source). How well do you think the code will perform under those circumstances? What are some ways you could modify the code to be more performant in bulk-operation scenarios?

7. Try modifying the code to be more bulk-operation friendly. Do you find it violating the OO design principles too much? Where do you think the line should be drawn in these tradeoffs?