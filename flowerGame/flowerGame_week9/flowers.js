var flower;
var dancingFlower;
var increaseBy = 50;
var maxGrow=0;
var growCount;
var randomNumber;
var dogObj;
/* New7 */
var dogStartTop =  "50px";

/* NEw 12 */
var boneObj;

/* NEW 17 */
var boneFound = false;

function loadGame() {
	//get random number between 0-10
	randomNumber=Math.random();
	//alert(randomNumber);
	//alert(randomNumber*10);
	//alert(Math.floor(randomNumber*10));
	maxGrow = Math.floor(randomNumber*10);
	flower = document.getElementById("flower");
	flower.style.width = "100px";
	growCount = 0;
	dancingFlower = document.getElementById("dancingFlower");

	//get dog element
	dogObj = document.getElementById("dog");
	dogObj.style.left = "2px";
	dogObj.style.top = dogStartTop;

	/** NEW 12 **/
	boneObj = document.getElementById("bone");
	boneObj.style.left = '400px';

	/** NEW 15 **/
	boneObj.style.top = '100px';

}
function moveDog() {
	var currentPosition = parseInt(dogObj.style.left);
	var newPosition = currentPosition + 100;
	var screenWidth = window.screen.width - 300;
	setTimeout("moveDog()", 200);
	/** NEW 18 */
	if(boneFound == false)
	{
		//only move dog if we haven't reached the end of screen
		if(currentPosition > screenWidth){
			dogObj.style.left = 2 + "px";
			var moveDogToTheTop = isDogAtTheBottomOfTheScreen();
			if(moveDogToTheTop) {
				dogObj.style.top = dogStartTop;
			} else {
				moveDogDown();
			}
		}
		else{
			dogObj.style.left = newPosition + "px";
			/*New10 */
			didHeFindTheBone();
		}
	}//NEW 18

	//alert("new Position of dog is: " + newPosition);
	//continuously move dog at speed 20
}
function isDogAtTheBottomOfTheScreen() {
	var maxTop = 600;
	var topPosition = parseInt(dogObj.style.top);
//alert('Is the top Position ' + topPosition
//		+ ' > ' + maxTop + '?');
	if(topPosition > maxTop) {
		return true;
	} else {
		return false;
	}
}
function moveDogDown() {
	var topPosition = parseInt(dogObj.style.top);
	//alert('Top position is: ' + (topPosition + 100));
	dogObj.style.top = topPosition + 100;
}

/** NEW 8 **/
function didHeFindTheBone() {
	/** NEW 9 */
	var boneObj = document.getElementById("bone");
	/* NEW 13 - add the parse int part */
	//if(parseInt(dogObj.style.left) > parseInt(boneObj.style.left)) {

	/* NEW 14 add the top comparision */
	if(parseInt(dogObj.style.left) > parseInt(boneObj.style.left)
	&& parseInt(dogObj.style.top) > parseInt(boneObj.style.top)) {

		//alert('did he find the bone?');
		/** NEW 11 **/
		//alert('did he find the bone?' + dogObj.style.left + ' > ' + boneObj.style.left);

		/**NEW 16 */
		//alert('He found the bone!');

		/* NEw 17 */
		boneFound = true;

	}
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


