

function pressKey(audioId) {
	changeKeyStyle();
	playNote(audioId);
}

function playNote(audioId) {
	var note = document.getElementById(audioId);
	note.play();
}

function changeKeyStyle(direction) {
	var key = document.getElementById('keyC');
	if(direction == 'down') {
		key.className = 'key keySelected';
	} else if(direction == 'up') {
		key.className = 'key';
	}
}