var flower;
var dancingFlower;
var increaseBy = 50;
var maxGrow=0;
var growCount;
var randomNumber;
var dogObj; 

function loadGame() {
	//get random number between 0-10
	randomNumber=Math.random();
	//alert(randomNumber);
	//alert(randomNumber*10);
	alert(Math.floor(randomNumber*10));
	maxGrow = Math.floor(randomNumber*10);
	flower = document.getElementById("flower");
	flower.style.width = "100px";
	growCount = 0;
	dancingFlower = document.getElementById("dancingFlower");

	//get dog element
	dogObj = document.getElementById("dog");
	dogObj.style.left = "2px";	
}
function moveDog()
{ 
/*this is for commenting on 
multiple lines
*/
	var currentPosition = parseInt(dogObj.style.left);
	var newPosition = currentPosition + 100;
	//get screen width
	var screenWidth = window.screen.width - 300;
	setTimeout("moveDog()", 200); 

	
	//only move dog if we haven't reached the end of screen	
	if(currentPosition > screenWidth){
		dogObj.style.left = 2 + "px";
	}
	else{
		dogObj.style.left = newPosition + "px";
	}
	//alert("new Position of dog is: " + newPosition);
	//continuously move dog at speed 20
}

function grow() {

	// Check if the flower has finished growing
	if(growCount != maxGrow)
	{
		var flowerWidth = parseInt(flower.style.width);
		flower.style.width = flowerWidth + increaseBy 
								+ "px";
		growCount = growCount + 1;
	} else if ( growCount == maxGrow ) {
		bark();
		flower.style.display = "none";
		dancingFlower.style.display = "block";
	}
		
}

function bark() {
	var sound = $('<embed autoplay="true" height="0" width="0" />');
	sound.attr('src', 'tada.wav');
	$('body').append(sound);
}


