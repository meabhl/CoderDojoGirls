008 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

This is the start of our adventure
to HTML games.

Aim
---------
This week we learn all about variables and change our image with Javascript.

Recap
-----
- What language do we use to add headings and images to our page?
- What language do we use to change colours and sizes on our page?
- What language do we use for animation? We learned this last week…
- What is a function?


JavaScript
-----
JavaScript is a language that will allow us to add movement and excitement
to our webpage.

This week the aims are:
* To animate an image, that will grow on click

To do this we will need to
* Link your function to the image
* Create a variable
* Resize the image

This week are we are introducing another new concept that lives at the core
of every language.  
* Variables

So keep an eye out for these and we will see more from them over our next
few weeks.

So lets try out our variable!

var flower = “CoderDojoGirls”;

Now lets change our alert to

alert(flower);

Cool! See how our alert displays what we’ve set in our variable!
Lets get on with creating our game.




Create your second function
----
Functions are activities that do one only.  Think of a game every time you press a key
it causes an activity which is handled by the function.

A function has the following rules
* starts with the word function
* then the function name (you can put what ever name you want, no spaces through)
* now put the open and close brackets ()
* add the open backet for your function {
* close your function with }

Create your second function
----
Before we can start changing the size of our image we need 

````javascript
function loadGame() {

}
````

Link your function to the page
-----
Did you know you can call javascript from your HTML code.  
Well its time to start.

One place you can call JavaScript is when the html page is fully displayed in your browser.
To do this you need to add __onload__ and your fuction name

````html
<body onload"loadGame()">


var flower; //from last week
````

We always add variables to the very top of the page when you open your JavaScript file you can quickly and easily 
see all your variables in the one place.  If you do this in every JavaScript file you create, it will make your 
life easier as you will know where you have created your variables

__NOTE__
If we create variables at the top of file outside functions means these variables can be used anywhere in the javascript.

````

Now that we have the flower variable in our javascript file, its now time get that variable from HTML code.  To 
do this you can use ````document.getElementById(tagId) ````

The __document__ variable is provided by JavaScript to you automatically, this means the web page, so every time you use the document
variable you are trying to get some information including tags from our webpage.

The __getElementById()__ is a function available on the document object that gets the HTML for a given id, can you go back to 
the HTML code and tell me what is the id of the div we are using for the flower?

Ok are you back? Yes you are right its id is __"flower"__

````html
<div id="flower">
	<img src="flower.png"/>
</div>

Now inside the __loadGame()__ function we are going to get the flower from the HTML code and assign it to the flower 
variable.  The code we all will now look like this

````javascript
flower = document.getElementById("flower");
````

With __flower__ equaling the id from the div tag.  Our __loadGame()__ function should now look like

````javascript

function loadGame() {
	flower = document.getElementById("flower");
}
````

Set the start flower size
--------
As we are going to be change the size of the flower we need to set a start size that we can increase.  Can you
 remember we set the width in the CSS which is our style.  Well javascript allows us to change the CSS to and this
 can be done by use the __variable name__ then __dot__ then __style__ then the css property in this case __width__.  This
 can then be set to a value say "150px".  Anyone remember what __px__ is?

Our new code is going to look like this and we need to add it to the __loadGame__ function

````javascript
flower.style.width = "150px";
````
The __loadGame__ function should now look like this

````javascipt

function loadGame() {
		flower = document.getElementById("flower");
		flower.style.width = "150px"
}
````

Time to make the flower grow
----------

Great we have created a variable called __flower__ which is the __div__ flower from our HTML code.  Its now time
to make the flower grow.

Are you all ok to grow the flower would you agree clicking on the flower image makes it bigger?  Great agreed then lets 
start coding this.  Are you all agreed that we are going to use the variable balloon to increase its size to make
the flower bigger?  


Our full flower.js should now look like

````javascipt

var balloon;

function loadGame() {
		flower = document.getElementById("flower ");
		flower.style.width = "150px"
}

function grow() {
	alert(balloon);
}

Get the balloon size
----------

We are now calling the __blow__ function on click of the balloon, but its not yet changing the size, we now need to achieve
this by adding some code to the __grow()__ function

To get started remove the alert message from the __grow()__ function, so it should now look like this again.  

````javascript
function grow() {

}

````

To increase the flower size would you agree we need to get the current flower size? Yes we need this so we can add 50 to its 
size every time you click on the flower.  To do this we are going to use need to use the flower __flower.style.width__ property. To
call this you need to use the __variable name__ then a __dot__ then __flower.style.width__ so it should look like this ```` flower.offsetWidth ````

Lets get the grow function to talk to us and tell what the current width is.  

````javascript
	alert(flower.style.width);
````

You blow function should now look like 

````javascript
function grow() {
	alert(flower.style.width);
}

````

Its time to refresh your browser and click on the image, what size did everyone get?  Did __150px__ appear
on everyones screen? Is there anything wrong with this value if we want to add 50? Yes of course their is huge problem,
the value has got __px__ at the end of it, this is not a number.  To make it a number we need to put a JavaScript bonus 
function around it called __parseInt()__ this function will strip the __px__ and give us __150__ instead.  You would all 
agree that its now easier to add __50__ to __150__.

Now update your code adding the __parseInt__ function around the __flower.style.width__ value

````javascript
function grow() {
	alert(parseInt(flower.style.width));
}

````

Refresh you browser click on the flower and see is __150__ being returned without px.   Great its now time
to create our second variable for the flower width.   We will now remove the __alert__ in __grow__ function
and replace it with a variable called width.  Do you remember how to create a variable?
* start with the word __var__ and a space
* then add the __variable name__ (width in this scenario)

To create a width variable equal to the flower current width the code would look like this.

````javascript
	//get the current size
	var width = parseInt(flower.style.width);
````

Our __grow__ function should now look like this

````javascript
function grow() {
	var width = parseInt(flower.style.width);
}

````

__NOTE__
As the __width__ variable is created inside this function, it can only be access inside this grow function 
and not outside it.

Make the flower bigger
--------

To get started with this, what number do we want to increase the balloon size? Pick a number? I am going with 50.  But
let me think the number 50 actually means something, is the increaseBy amount for every grow.  I think this an ideal
candidate for a new global variable in __flower.js__.  So lets go up the top of our page and add this new variable.  Remember how
to create a new variable?
* start with the word __var__ and a space
* then add the __varaiable name__ (width in this increaseBy)
* add equals __=__ and set it to __50__
* finish with semicolan __;__

````javascript
var increaseBy = 50;
````

Your __flower.js__ should now look like this.

````javascript
var flower;
var increaseBy;

function loadGame() {
		flower = document.getElementById("flower ");
		
		flower.style.width = "150px"
}

function grow() {
	var width = parseInt(flower.style.width);
}
````

Now that we have a new variable to increase the flower size, its time to get stuck in an increase the flower size
so go back to the __grow__ function.  

Lets start with bit of maths and set the __width__ equal to __width__ plus __increaseBy__, so we are saying
````javascript
 width = width + increaseBy; 
 ````
Your blow function should now look like this

````javascript
function grow() {
	var width = parseInt(flower.style.width);
	width = width + increaseBy; 
}
```` 
 
Great we have increased the width, now refresh your browsers and click on the balloon, is it increasing? No

The reason its now increasing is that we have not updated the __flower__ with the new __width__ value.  So lets
do that in the __grow__ function.  This time we need to put the __px__ back into the width value, this can be done by adding 
```` + 'px' ````

To set the balloon width use

````javascript
flower.style.width = width + 'px';
````


````javascript
function grow() {
	var width = parseInt(flower.style.width);
	width = width + increaseBy; 
	flower.style.width = width + 'px';
}
````

Questions
-------

Great session today with you now creating variables and function with ease, we learnt today how to blow up the balloon.  

* What is a function?
* What is a variable?
* Why do we wait until the HTML code has loaded before calling the JavaScript functions?
* How do you call a JavaScript function from your HTML when the page loads?
* How do you call a JavaScript function when you click an image?
* How do you get the width in JavaScript of an HTML variable?
* What does parseInt function do?
* How did we get the width of the balloon in JavaScript?
* How did we increase the width of the balloon?






