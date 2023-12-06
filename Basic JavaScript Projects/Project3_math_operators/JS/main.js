alert("more javascript");
window.alert("event handlers, function, operators and more!"); //window alert

document.write("<h1>Event Handlers, Operators, Functions and More</h1>");
console.log("Devs mostly use the console to test their javascript code");


function addition_Function() {
    var addition = 3 + 22;
    document.getElementById("Addition").innerHTML = "3 + 22 = " + addition;
} //addition operation

function subtraction_Function () { 
    var Subtraction = 5 - 2; 
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
} //subtraction operation

function multiplication () { 
    var simple_Math = 6 * 8;
    document.getElementById("Multiply"). innerHTML = "6 x 8 = " + simple_Math; 
} //multiplication operation

function division () { 
    var simple_Math = 48/6; 
    document.getElementById("Divide").innerHTML = "48 / 6 =" + simple_Math; 
}

function negation_Operator () { 
    var x = 10; 
    document.getElementById("Math") . innerHTML =-x;
}

function modulus_Operator () {
    var remainder = 25 % 6; 
    document.getElementById("modulus") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function increment () {
    var I = 10;
    I++;
    document.getElementById("increment") .innerHTML = "10 plus an increment of 1 =" + I;
} //increment by 1 

function decrement () {
    var D = 9;
    D--;
    document.getElementById("decrement") .innerHTML = "9 plus a decrement of -1 =" + D;
}  //decrement by 1 

function random () {
    var B = Math.floor(Math.random() * 100);
    document.getElementById("rand") .innerHTML = B;
} //random number return between 1 and 100


