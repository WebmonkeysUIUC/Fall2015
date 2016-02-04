//----Part 1 (Basics)---

//declaring variables
var x = 1;
var y; //undefined

//arithmitic, operators
1 + 2 - 3 / 5 * (6 % 7)
var x = 1, y =2, z=3;
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
 typeof NaN  //number

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
//switch , always end with a default
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

//break, continue
for(var i = 0; i < 10; i++){
  if(i == 9) break; // will stop
  if(i == 3) continue; // skip 3
  //do some stuff
}

//errors
/*The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.*/
var message, x;
message = document.getElementById("message");
message.innerHTML = "";
x = document.getElementById("demo").value;
    try {
        if(x == "") throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10) throw "is too high";
        if(x < 5) throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
//code example
//http://www.w3schools.com/js/tryit.asp?filename=tryjs_finally_error
/*<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>

<p id="message"></p>

<script>
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if(x == "")  throw "is empty";
        if(isNaN(x)) throw "is not a number";
        x = Number(x);
        if(x > 10)   throw "is too high";
        if(x < 5)    throw "is too low";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}
</script>

</body>
</html>
*/

//debugging
console.log(err);
//debuger  The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;

//Hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.
x = 5; // Assign 5 to x
var y = x; //assignment
var x; // Declare x
//but if initialized then it will not be moved
var y = 0;
y = x; //return undefined
var x =5;
//this is also bad
var y = 0;
var x;
y = x; // return undefined
x = 5;

//"use strict"
/* Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.*/


//document.getElementById("demo")

//Question:
//breaking a string and return statement
var x =
"Hello World!"; //Hello World
var x = "Hello
World!"; // Will not work
var x = "Hello\
World"; // Hello World
//
var
power = 10;
return
a * power;//return undefined
//
var
power = 10;
return a * power // return a ^ power

//Live coding:


//interview Questions:

//1. Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
//2. What will be the output when the following code is executed? Explain.
console.log(false == '0')
console.log(false === '0')

//3. What is "use strict";? what are the advantages and disadvantages to using it?

//4 .What tools and techniques do you use debugging JavaScript code?

//https://github.com/h5bp/Front-end-Developer-Interview-Questions#general-questions
