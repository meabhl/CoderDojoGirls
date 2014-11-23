009 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

Aim
---------
This week we will make a dancing flower appear!

Recap
-----
- What language do we use to add animation to our web page?
- What is a variable? Function?
- do you remember adding your first if statement? (have a look at the javascript file and explain the grow() method)
- How do we centre a div?


Last week we figured out how to put a div in the center of the page. Now, how about our heading. What selector will we use to change our heading?
h1 {
}
Now do you remember how to get text in the centre?
h1 {
	text-align: center;
}
Now, lets add another picture to the screen? How about a dancing flower picture? We could make it appear when the other flower disappears! Download your favorite picture from www.coderdojodcu.com/girls/previous/ or get your own from the internet J
How about we create a div first. How do we do that? Where will we put it? How about in our container div so that it stays in the centre too? Lets give it an id of ‘dancingflower’.
<div id="dancingflower">
</div>
Next add our image. Remember to put in the name of the picture you downloaded. Check the folder your code is saved in.
<div id=”dancingflower”>
<img src=”dancingflower.gif”/>
</div>
Yikes! It’s really big. We also don’t want it to show up until we’ve finished growing the flower right? Lets fix the size first, then we’ll try to hide it.
What css selector will we add to our style.css file? 
div#dancingflower {
}
Great, so now lets set a width. What size do you think?
div#dancingflower {
	width: 200px;
}
So how are we going to make the dancing flower disappear when the page first loads? Remember in our javascript when we made the first flower disappear? flower.style.display = "none"; Its similar for our stylesheet too
div#dancingflower {
	display: none;
	width: 300px;
}
Make the dancing flower appear after the first flower disappears (after 15 clicks)
How do we make it appear when we’ve finished growing? Lets go back to our javascript.
Let’s create a dancing flower variable at the top of our file
var flower;
var dancingFlower;
How do we ‘initialize’ our dancingFlower variable? Remember how we did it for the flower?
In our loadGame()
dancingFlower = document.getElementById("dancingFlower");
How do we check if our javascript works? 
alert(dancingFlower);
Hmmm, do you get an alert with ‘null’ too? We’ve made a mistake? Do you know what it is? 
We got the element with id of dancingFlower but if we look at our html code the id is 
<div id=”dancingflower”>
The f for flower is small letter!! How about we make that 
<div id=”dancingFlower”> instead?
Great, now what does our alert say? [object html div element] great, that means its found our div
Making our dancing flower appear
First, when do we want to make it appear?
When the flower has finished growing right? Take a look at our javascript
function grow() {

	// Check if the flower has finished growing
	if(growCount != maxGrow) {	
var flowerWidth = parseInt(flower.style.width);
		flower.style.width = flowerWidth + increaseBy + "px";
		growCount = growCount + 1;
	} else if ( growCount == maxGrow ) {
		alert("The flower has finished growing!");
		flower.style.display = "none";
	}		
}




So now we know where to make it appear. Now, how do we make it appear?
else if ( growCount == maxGrow ) {
		alert("The flower has finished growing!");
		flower.style.display = "none";
		dancingFlower.style.display = “block”;
	}
	

Cool, now can you remember how to put a div in the center? We did it twice last week! 
