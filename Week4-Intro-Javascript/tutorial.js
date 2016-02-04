//----Part 1 (Basics)---

//declaring variables
var x = 1;
var y; //undefined

//arithmitic, operators
1 + 2 - 3 / 5 * (6 % 7)
var x = 1;
var sci = 123e5; //12300000
x++;
x--;
x %= 2;
x *= 2;

//string addition
"Web" + "Monkey" // WebMonkey
"Monkey" + 5 //John5
"5" + 2 // 7

//comparison and logic operator
 x == y // x and y have the same value
 x === y // x and y have the same value and the same type
 x != y
 // > < >= <= ! && || ...
 "2" < "12" // false because 2 is bigger than 1 alphabitcally
 "Web" < 2 // false because "Web" will return NaN which results in false

//typeof
 typeof 2 // number
 typeof"2" // string
 typeof ("CS" + 2) // string
 typeof undefined // undefined
 typeof null //object

 //function
 function name(parameter1, parameter2, parameter3) {
    //code to be executed
}
//calling the function without () return the function definition
function sum(a, b){ return a + b;}
var x = sum(1, 2) // return 3
var x = sum // return function sum(a, b){ return a + b;}

//Object
var person = {
    firstName:"Ding",
    lastName:"Ding",
    age:21
};
//objectName.propertyName or objectName["propertyName"]
var Fname = person.firstName; var Lname = person["lastName"];

//scope
var z = 3; //global
function Afunc(){
  var x = 1; //local
  y = 2; //global
}
//in HTML, global variable is window variable

//Events
//<some-HTML-element some-event='some JavaScript'>
<button onclick='getElementById("demo").innerHTML=Date()'>The time is?</button>//html
/*onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page*/

//strings
var s = "I am a String!";
var s2 = 'I\'m also a string \n'; // \' \" \n \t \r
var x = "TutuRu~"; // string
var y = new String("TutuRu"); //object
var z = new String("TutuRu");
x == y //true
x === y // false
y === z // false, different object and JavaScript objects cannot be compared.
//str methods
s.search("String"); // index of String
s.replace("String", "string"); // I am a string
//...

//Math
Math.random();
Math.min(val1, val2, val3...);
Math.celi(2.33);
//...

//Array
//var array-name = [item1, item2, ...];
var arr = ["1MISSISSIPI", "2MISSISSIPI"];
var arr2 = new Array("1MISSISSIPI", "2MISSISSIPI"); // same thing as arr no need to use new Array().
arr[0]; arr.length; arr.sort();//sorts alphabitcally
arr.push("3MISSISSIPI"); arr[arr.length] = "3MISSISSIPI";
arr[10] = "3MISSISSIPI";//undefeind
var points = []; //dont use new Array, complicates the code also produce some unexpected results:

//conditions
if (condition1) {
    //block of code to be executed if condition1 is true
} else if (condition2) {
    //block of code to be executed if the condition1 is false and condition2 is true
} else {
    //block of code to be executed if the condition1 is false and condition2 is false
}
switch(expression) {
    case n:
        // some code
        break;
    case n:
        // some code
        break;
    default:
        default // some code
}

//for, for/in, and while
var x = 5;
for(var i =0/*, var two = 0 */; i < x; i++){
  //code
}
var mp = {name: "mp_name", difficult: "hard", parts: "infinity"};
var text = "";
for(var x in mp){
  //code
  text += mp[x] + " ";
}
/*while (condition) {
    code block to be executed
}*/










//document.getElementById("demo") etc

//Question:

//Live coding:


//interview Questions
