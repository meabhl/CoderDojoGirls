var keyDiv = 'testing';

function pressSharpKey(keyName, theKey){
 
  var sharpKeyName='';
  alert(keyName);

   alert(keyName.length);
  for(var i=0; i < keyName.length; i++){
   alert(keyName.charAt(i)+ "   -   "+i);
  }
  sharpKeyName='sharp'+keyName.charAt(5);
  changeKeyStyle('down');
  
 
}
function changeSharpStyleKey(direction,sharpKey){

	if(direction == 'down'){
		keyDiv.className = "sharp " +sharpKey+" sharpSelected" ;
	}


}
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

function playScale(){
  var myNotes=["audioC","audioD","audioCsharp","audioE","audioF"];
  
  for(var i=0; i < myNotes.length;i++){
    alert(myNotes[i] + "   -   "+i);
	playNote(myNotes[i]);
  }

}