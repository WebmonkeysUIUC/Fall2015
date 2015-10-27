function eventsInit() {
	var fruitLinks = document.getElementsByClassName('showhide');
	var fruitPics = document.getElementsByTagName('img');

	for (var i=0; i<fruitPics.length; i++) {
		fruitPics[i].style.display = 'none';
	}
	for (var i=0; i<fruitLinks.length; i++) {
		fruitLinks[i].addEventListener("click", showHidePic);
	}
}


function showHidePic() {
	var fruitPics = document.getElementsByTagName('img');

	// this
	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);

	for (var i=0; i<fruitPics.length /* fruitPics */; i++){
		fruitPics[i].style.display = 'none';
	}
	if (pic.style.display == 'none'){
		pic.style.display = 'block';
	}
	else {
		pic.style.display = 'none';
	}

}

eventsInit();