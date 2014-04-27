var keyDiv = 'testing';

function pressKey(audioId, theKey) {
	keyDiv = theKey;
	//alert(keyDiv);
	changeKeyStyle('down');
	playNote(audioId);
	setTimeout(function(){changeKeyStyle('up')}, 1000);
}

function playNote(audioId) {
	
	var note = document.getElementById(audioId);
	note.play();
}
//This changes to style of the key
function changeKeyStyle(direction) {
	//var key = document.getElementById('keyC');
	//alert(direction);
	if(direction == 'down') {
		keyDiv.className = "key keySelected";
	} else if(direction == 'up'){
		keyDiv.className = "key";
	}
}