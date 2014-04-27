007 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

This is the start of our adventure
to HTML games.

Aim
---------
This week we'll learn about animation, this will provide us with the basics
we need to build really cool HTML Games.  To start with animation we 
need to expand our minds to a new language called JavaScript.

Recap
-----
- How do we add a link to our webpage?
- How do we make our heading text move to the middle of the page?
- What is a div? what does the div tag do?
- How do we change the background color?
- How do we change the text color?

All webpages you use are built using one of three languages and you have already
learnt two of them HTML and CSS. 
* HTML is the language for displaying content on the Internet.
* CSS is the language we used to style our HTML


JavaScript
-----
JavaScript is a language that will allow us to add movement and excitment
to our webpage.

This week the aims are:
* To animate an image, that will grow on click

To do this we will need to
* Add an image to our page
* Create a new JavaScript file
* Create your first function
* Link your function to the image
* Create a variable
* Resize the image

This week are we are introducing two new concepts that live at the core
of every language.  These principles are
* Functions
* Variables
So keep an eye out for these and we will see more from them over our next
few weeks.

Create a new page with image on it
----
To get started its your turn
* Add a image to your webpage - our coderdojo flower!
* Make sure your div has an id of flower

Ok maybe its time to see if you are right
````html
<html>
	<head>
		<title>CoderDojoGirls DCU - Flower Game</title>
	</head>
	
	<body>
		<h1>CoderDojoGirls Flower Game - Make it grow </h1>
		
		<div id="flower">
			<img src="flower.png"/>
		</div>
	
	</body>
</html>
````


Hmm, is our picture too big?  How do we set a width to make it smaller?
Thats right, 
div#flower {
	width: 100px;
}

Now why didn't that work? Lets see what size the div is by giving it a different background color.
div#flower {
	width: 100px;
	background-color: yellow;
}

Now we see the image is bigger than the box we put it in! Thats annoying. This is how we can fix it

img {
	width: 100%;
}
So now, our image is 100% wide.. so its 100% of the box its in *phew* now its smaller.

Create a new JavaScript file
----
Now you will need to create a new file for your JavaScript code.  JavaScript
files are stored in .js files.  So lets get started create a new blank file in your
current folder called flower.js

Add the Javascript to your HTML file
-----

Its now time to add your javascript file to the HTML, just like we seen in with CSS
we need to add a relationship between the HTML and Javascript files.  This is done
using the ````<script>```` tag.  

__NOTE__
Inside the script tag you use the src property to set your Javascript file. Its very important
the file name is exactly the same (remember same case) and finished with __.js__

The script tag should look like this including the type of "text/javascript"
````html
	<script type="text/javascript" src="flowers.js"></script>
````

You add this tag inside you ````<head>```` tag and your HTML should now look like this.

````html
<html>
	<head>
		<title>CoderDojoGirls DCU - Flower Game</title>
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<script type="text/javascript" src="flowers.js"></script>
	</head>
	
	<body>
		<h1>CoderDojoGirls Flower Game - Make it grow</h1>
		
		<div id="flower">
			<img src="flower.png"/>
		</div>
	</body>
</html>
````

Time to get the JavaScript talking to you
----
A great way to start every language is to get that language talking to you.  This idea is known as "Hello World" and 
lets introduce you to your first hello world with JavaScript.  So lets open flowers.js and add the following code


````javascript
alert('Hello CoderDojoGirls');
````
Change the message from Hello CoderDojoGirls to your own name, make sure its inside the single quotes __'__ though and then
refresh your browser, congratulations you have written your first line of JavaScript.  This is the start
of your amazing programming adventure.

##### alert
alert(text) is a function provided by JavaScript, this puts a message on to your screen.  
* text is a string that must have a __"__ or single __'__ quote around it at both ends.
* each line must finish with a semi colan __;__

Ok delete the alert and its time we jump into some serious coding

Create your first function
----
Functions are acivities that do one only.  Think of a game every time you press a key
it causes an activity which is handled by the function.

A function has the following rules
* starts with the word function
* then the function name (you can put what ever name you want, no spaces through)
* now put the open and close brackets ()
* add the open backet for your function {
* close your function with }

````javascript
function grow() {

}
````

Link your function to the image
-----
Did you know you can call javascript from your HTML code.  
Well its time to start.

One place you can call JavaScript is when the html page is fully displayed in your browser.
To do this you need to add __onclick__ and your fuction name

````html
<img onclick"grow()">
````



