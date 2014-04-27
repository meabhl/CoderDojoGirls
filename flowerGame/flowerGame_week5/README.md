011 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

Aim
---------
This week we will introduce randomness in to our game!
Lets add some sound to the game.

Recap
-----
- What language do we use to add animation to our web page?
- What is a variable? Function?
- If I wanted to compare two things what do I use.
- What html do you use to add a header?

Last week we made a flower dance after 15 clicks:
To do that we added a new image with a dancing flower.
So, we added a new variable in our javascript called
var dancingFlower;
How do we ‘initialize’ our dancingFlower variable? Remember how we did it for the flower?
In our loadGame()
dancingFlower = document.getElementById("dancingFlower");
How do we check if our javascript works? 
So, how did we make our dancing flower appear?
Take a look at our javascript
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
Week 11
What do you mean by randomness?
Well at the moment, we need to click our flower 15 times.  After a while, this becomes a bit boring, so if we introduce a randome number where by you dont how how many times you need to click on the flower - it gives the element of suprise.

How do we do this?
Well, we have to click the mouse 15 times, because we gave the game that instruction when we set:
var maxGrow = 15;
If we change maxGrows to be 0
var maxGrow = 0;
Then in our loadGame() we can use an inbuilt Math function which generates a random number.
Math.floor(Math.random()*10);

To see this working in the loadGame() method,
Add a new variable above the loadGame() method, below all other methods
var randomNumber;
In loadGame() set the variable 
randomNumber=Math.random(); - Math.random() generates a random number.
Use an alert below the statement to output the random number that was generated 
alert(randomNumber);
Because, this is a random number, we want to make sure that the number is a reasonably large whole number and not a decimal, we multiply the number by 10.
randomNumber*10;
Use an alert below the statement to output the random number that was generated 
alert(randomNumber*10); 
Well, who ever heard of 2.5 clicks? No one, so, we need to round down the number. We use another inbuilt function called 
Math.floor(randomNumber*10));
Use an alert below the statement to output the random number that was generated 
alert(Math.floor(randomNumber*10));
So in loadGame()  set
maxGrow = Math.floor(randomNumber*10);

Neat Eh! Now we never know how many clicks we need, well when remove the alerts()!!!

					Adding Sound
Why dont we add some sound when we get we have reached our maxGrows?
So at the moment, when we have clicked more than max grows we output a statement.
alert("The flower has finished growing!");
Fancy browsing to get some sound files? Lets go back to our HTML file. It loads the sound immediatly, and thats not what we want.
<audio autoplay="autoplay" controls="controls">  
	<source src="tada.wav" type="audio/wav">
		Your browser does not support this audio format.
</audio> 
We want to play the sound when we display our dancing flower
We need to use jquery to play the sound - open the HTML file and include the following statement.
<script type="text/javascript" src="jquery.js"></script>
