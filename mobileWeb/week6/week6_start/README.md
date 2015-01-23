# Week 6 January 24th 2015
Lets add some styling
- When we click on the CoderDojo girls logo the bird disappears and reappears right? But the logo doesn't
look like a button - so lets add some style

1. Add a different mouse/cursor style
- In style.css find the codergirl div and change the cursor
--  div#codergirl {
        cursor: pointer;
    }

2. How about we stop the whitespace from changing?
-- Because the birddiv has position relative, its taking up space on the page relative to whats around it.
By changing the positive to absolute we can fix this.

3.  Lets learn how to pass variables into our functions!
- Remember, a function has one job to do. How can we make our showBird function better?
- First, change hideBird and showBird to hideImage and showImage, then we can use it again :)
How do we know which image to hide or show? We use a variable!!
Pass in the id of the image and then we can create an object.