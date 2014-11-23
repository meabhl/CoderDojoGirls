013 Intro to Animation - HTML Course @ CoderDojoGirls DCU
===================================

Aim
---------
This week we will make our dog even better J

Recap
-----
- How did you add a dog to your page?
- How did you get the dog to move?

How about we get our dog to move up and down the screen too?
First, lets set the top position when we load our game.
dogObj.style.top = dogStartTop;
Whats dogStartTop? Well lets create a variable so we can use it more than once.
At the top of the file add
	var dogStartTop = "300px";
So in our moveDog function lets get the top position for our dog. How did we get the left position? Well its really similar!
	var topPosition = parseInt(dogObj.style.top);
We have a lot of code in this function already – remember – one job for each function.. so lets create a new one to move our dog up or down. 
	function moveDogDown(){}
So when do we want to call this function? How about when the dog is at the end of the screen?
	if(currentPosition > screenWidth){
		dogObj.style.left = 2 + "px";
		moveDogDown(topPosition);//pass in the top position we created already
	}
Now we’re going to do something new. We can pass a variable from one function to the other!
	function moveDogDown(dogTop){}
We can have a different name – that’s pretty cool
So what goes in our moveDogDown function?
First, lets move the dog!
dogObj.style.top = dogTop + 100 + "px";
Great, oh no… now he’s running off the screen! 
Lets create a function to figure out if the dog is at the bottom of the screen
function isDogAtTheBottomOfTheScreen(topPosition) {
	return topPosition > maxTop;
}
So where will we call it?
In our move method
var moveDogBackToTheTop = isDogAtTheBottomOfTheScreen(topPosition);
	if(moveDogBackToTheTop) {
		
	}  else {
		moveDogDown(topPosition)
}

So whats missing? We need to move him back to the top don’t we?
Lets move him back then
if(moveDogBackToTheTop) {
		dogObj.style.top = dogStartTop;	
	}  else {


