

var flower;
var increaseBy = 50;
var maxGrow = 15;
var growCount;

function loadGame() {
	flower = document.getElementById("flower");
	flower.style.width = "100px";
	growCount = 0;
	
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
		alert("The flower has finished growing!");
		flower.style.display = "none";
	}
		
}