009 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

Aim
---------
This week we will style our game to make it cool

Recap
-----
- What language do we use to add animation to our web page?
- What is a variable? Function?
- Do you know what == means? How about !=?
- do you remember adding your first if statement


So how can we make our game look better? How about we put the picture in the middle of the page. Do you remember how we did that for our first webpages?
Lets start with adding a container div that we can put in the center.
<body onload="loadGame()">
		<h1>Flower Game - Make it grow!</h1>
		<div id="container">	
			<div id="flower">
				<img onclick="grow()" src="flower.png"/>
			</div>
		</div>
	</body>
Great, so now we can style our container. Remember how to put it in centre?
In Style.css
div#container {
	margin-left: auto;
	margin-right: auto;
}

Hmm, that didn’t work. Wait, our browser needs to know how wide our div is before it can figure out how to calculate the margins. Lets try
Width: 600px;
Our flower still isn’t in the centre of the screen is it? Any idea how to fix that? 
Could we change the style of the flower div? What would we change?
div#flower {
	width: 100px;
	background-color: yellow;
	margin-left: auto;
	margin-right: auto;
}
How about we turn the mouse into a cursor? Lets try downloading our picture first.
Then: cursor: url('wateringCan.cur');
You can try getting your own off the internet but it has to be reallly really small
Who can figure out how to put the heading in the center? We’ll do that next week!
