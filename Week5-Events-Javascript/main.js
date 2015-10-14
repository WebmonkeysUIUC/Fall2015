var banana = document.getElementById("banana");
var apple = document.getElementById("apple");
var orange = document.getElementById("orange");

var bananaId = banana.attributes["data-img"].value;
var bananaPic = document.getElementById(bananaId);
var appleId = apple.attributes["data-img"].value;
var applePic = document.getElementById(appleId);
var orangeId = orange.attributes["data-img"].value;
var orangePic = document.getElementById(orangeId);

bananaPic.style.display = 'none';
applePic.style.display = 'none';
orangePic.style.display = 'none';

banana.addEventListener("click", function() {

	applePic.style.display = 'none';
	orangePic.style.display = 'none';
	if (bananaPic.style.display === 'none') {
		bananaPic.style.display = 'block';
	}
	else {
		bananaPic.style.display = 'none';
	}

});

apple.addEventListener("click", function() {

	bananaPic.style.display = 'none';
	orangePic.style.display = 'none';
	if (applePic.style.display === 'none') {
		applePic.style.display = 'block';
	}
	else {
		applePic.style.display = 'none';
	}

});

orange.addEventListener("click", function() {

	applePic.style.display = 'none';
	bananaPic.style.display = 'none';
	if (orangePic.style.display === 'none') {
		orangePic.style.display = 'block';
	}
	else {
		orangePic.style.display = 'none';
	}

});