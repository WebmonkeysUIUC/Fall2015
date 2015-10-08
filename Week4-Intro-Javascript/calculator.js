
var numOneA = document.getElementById("num-one-a");
var numTwoA = document.getElementById("num-two-a");
var sum = document.getElementById("sum");

numOneA.addEventListener("input", add);
numTwoA.addEventListener("input", add);
function add() {
	var one = parseFloat(numOneA.value) || 0;
	var two = parseFloat(numTwoA.value) || 0;
	sum.innerHTML = ("The sum is: %f", (one+two));
}

var numOneS = document.getElementById("num-one-s");
var numTwoS = document.getElementById("num-two-s");
var diff = document.getElementById("diff");

numOneS.addEventListener("input", subtract);
numTwoS.addEventListener("input", subtract);
function subtract() {
	var one = parseFloat(numOneS.value) || 0;
	var two = parseFloat(numTwoS.value) || 0;
	diff.innerHTML = ("The difference is: %f", (one-two));
}

var numOneM = document.getElementById("num-one-m");
var numTwoM = document.getElementById("num-two-m");
var prod = document.getElementById("prod");

numOneM.addEventListener("input", multiply);
numTwoM.addEventListener("input", multiply);
function multiply() {
	var one = parseFloat(numOneM.value) || 0;
	var two = parseFloat(numTwoM.value) || 0;
	prod.innerHTML = ("The product is: %f", (one*two));
}

var numOneD = document.getElementById("num-one-d");
var numTwoD = document.getElementById("num-two-d");
var ratio = document.getElementById("ratio");

numOneD.addEventListener("input", divide);
numTwoD.addEventListener("input", divide);
function divide() {
	var one = parseFloat(numOneD.value) || 0;
	var two = parseFloat(numTwoD.value) || 0;
	if (two === 0.0) ratio.innerHTML = ("You can't just divide by 0 dude!");
	else ratio.innerHTML = ("The ratio is: %f", (one/two));
}