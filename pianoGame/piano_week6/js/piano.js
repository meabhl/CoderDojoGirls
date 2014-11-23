//First, change the style so the key looks pushed down
//Next, play the sound
//Finally, change the style again so the key looks like it sprung up.
function pressKey() {
	changeKeyStyle('down');
	playNote('audioC');
	setTimeout(function(){changeKeyStyle('up')}, 1000);
}

function playNote(audioId) {
	var note = document.getElementById(audioId);
	note.play();
}

function changeKeyStyle(direction) {
	var key = document.getElementById("keyC");
	//alert(direction);
	if(direction == 'down') {
		key.className = 'key keySelected';
	} else {
		key.className = 'key';
	}
}