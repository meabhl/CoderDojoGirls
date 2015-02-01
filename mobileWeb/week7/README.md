# Week 7 January 31st 2015
This week we are going to learn more about animation!

- How about we make the bird fly back to the left?

First, lets allow our bird to fly all the way from the top left. She has position relative style. This means she shouldn't
move outside the div id container. How about we change this to position:absolute so she can fly wherever
 she likes?
 In our _style.css_ change relative to absolute for our div with id _birdDiv_

 ```css
div#birdDiv {
	position: absolute;
 ```

-- *New function* to move the bird left
In our style.css_ file create a new animation

```css
@-webkit-keyframes moveLeft {
    from {
    	left:100%;
    }
    to {
    	left: 0;
    }
}
```

and call our flyLeft animation from our birdDiv style

```css
-webkit-animation: moveRight 5s,
						moveLeft 5s linear 5s;
	animation:  moveRight 5s,
				moveLeft 5s linear 5s;
```
Notice there are a few extra _parameters_ for our animation?
- moveLeft is the animation name
- 5s is the number of seconds to run the animation for
- linear is the maths algorithm used to figure out how to animate from one state to the next (from right to left)
- 5s is the delay before starting this animation (we have to wait for the moveRight to finish before we move left!)

Ha ha the bird can fly backwards! :D How about we get her to turn around before she flies back left.
Lets make her fly!
```css
@-webkit-keyframes moveLeft {
    from {
    	left:100%;
		transform: rotateY(180deg);
    }
    to {
    	left: 0;
		transform: rotateY(180deg);
    }
}
```

- You can add this animation to lots of different div's on your webpage. You can also animate more than just the left
position and transform. Try background-color, border, top!!

- Next we added audio to our page - how about a chirping bird? I downloaded bird.wav from sourcewav.com. How about
you find a cool sound for your webpage?

- To add sound we need to add an audio tag to our html page:
```html
 <audio id="birdSound" autoplay>
	<source src="bird.wav" type="audio/wav"/>
 </audio>
```
We set autoplay to play as soon as we open the webpage. We could control when to play the sound from our javascript file later.
replace bird.wav with the name of your sound file. You can also use mp3s by changing the type to "audio/mpeg"



