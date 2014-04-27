var flower;
var dancingFlower;
var increaseBy = 50;
var maxGrow=0;
var growCount;
var randomNumber;

function loadGame() {
	//get random number between 0-10
	randomNumber=Math.random();
	alert(randomNumber);
	alert(randomNumber*10);
	alert(Math.floor(randomNumber*10));
	maxGrow = Math.floor(randomNumber*10);
	flower = document.getElementById("flower");
	flower.style.width = "100px";
	growCount = 0;
	dancingFlower = document.getElementById("dancingFlower");
	
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