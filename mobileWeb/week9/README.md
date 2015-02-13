# Week 9 February 14th 2015
This week we are going to

- Lets update Style ready for our tree to grow out of the ground
Edit style.css. How do we set the height of the container to only take up the space that we see?
Lets add height:
 ```css
div#container {
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	border: 5px inset greenyellow;
	padding: 5%;
    height: 40%;
}
 ```

 - Lets make sure our tree has enough room to grow. To put our logos at the top right lets try adding 'float: right'

 ```css
div#codergirl {
	width: 90%;
	height: 60%;
	cursor: pointer;
	cursor: hand;
	float: right;
}
 ```
Its also taking up a bit too much space so lets decrease the width to the same width as the pictures
 ```css
div#codergirl {
	width: 260px;
	height: 60%;
	cursor: pointer;
	cursor: hand;
	float: right;
}
 ```
And in our html lets move it to the top of the page so we have room for the tree at the bottom
index.html
Cut (ctrl and x) and paste (ctrl and v) this div into the top of the container div.
```html
<div id="codergirl" class="button">
			<img src="codergirl.jpg" onClick="hideBird()"  ondblclick="showBird()">
			<img src="logo.png">
		</div>
```

Now how about we add some grass to put (plant) our tree in it! (Move the <div> with id 'tree' into a new div
We'll add the html first
```html
 <div id="grass">
          <div id="tree">
              <img id="twig" src="twig.gif" onClick="grow()"/>
              <img id="sapling" src="sapling.png"/>
          </div>
      </div>
```

We can add some cool css for the grass div to make it 'stick' to the bottom of the page.
Open style.css and add a new style
```css
div#grass {
    position:fixed;
    left:0;
    bottom:0;
    height:200px;
    width:100%;
    background-image:url('grass.jpg');
    background-size: 200px 200px;
}
```

How do we get the twig image to stay at the bottom of the grass? lets add a new style to style.css
```css
div#grass img {
   position: absolute;
   bottom: 0;
}
See how we can change all images in the div at the same time? Cool eh ;)
This new style means _Change the style of the <img> that is in the div with the id="grass"_

```

-- *Javascript time*

Lets change the picture of the twig after we click it 3 times - it can turn into a lovely little tree!
We need a new 'if' statement that says 'If the counter (the number of times we've clicked the twig) is equal to 3 THEN we turn the twig into a tree!
```javascript
function grow() {
    counter = counter + 1;
    if (counter < 3) {
        increaseWidth();
        increaseHeight();
    }

    if (counter === 3) {
      twigToTree();
    }
}
```

Wait.. javascript errors? Hmmmm Oh yeah, we never created the twigToTree function. Lets add it now.
First we need to make sure we can get our sapling variable
in javascript.js
Add this to the top of the file
```javascript
var sapling;
```

In the onload function add
```javascript
onload = function () {
    sapling = document.getElementById("sapling");
};
```
Now we have _initialized_ our sapling variable and we can use it anywhere in our javascript.js file.
How about we do the same with our twig variable so we only need to initialize it once?
```javascript
onload = function () {
    sapling = document.getElementById("sapling");
    twig = document.getElementById("twig");
};
```
We can remove twig = document.getElementById("twig"); from increaseHeight and increaseWidth

```javascript
function twigToTree() {
    twig.style.display = "none";
    sapling.style.display = "block";
}
```

To make my page a little prettier we can change the background color of the entire page in the index.html
```css
body {
	background-image: url(logo.png);
	background-repeat: no-repeat;
	background-color: #6ec5fb;
	padding-top: 70px;
}
```

I also changed the style of the tree to hidden for when we load the page instead of doing this in javascript in the onload function.
THis is because the tree is showing up as a flicker when we first load the page. ITs better to make changes in the style.css

style.css
```css
.hidden {
    display: none;
}
```

index.html
```html
<img id="sapling" src="sapling.png" class="hidden"/>
```

How we have a much prettier webpage like the one here:
http://ninja2.mycoderdojodcu.com


