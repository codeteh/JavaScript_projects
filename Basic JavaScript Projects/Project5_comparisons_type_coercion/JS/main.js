document.write(typeof "Word");
document.write("<br>");

document.write(typeof 73636);
document.write("<br>");

document.write ("10" + 5);
document.write("<br>");

document.write (10>2);
document.write("<br>");

document.write (10<2);
document.write("<br>");

console.log(2+2);
//ctrl+shift+i to see console or just hit f12 

document.write(10 == 10);
document.write("<br>");

document.write(3 == 11);
document.write("<br>");


X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");

A = 82;
Z = "82";
document.write (A === Z);
document.write("<br>");
// A is equal to Z but not exactly equal because Z is a string value and A is a number

C = "Magnus";
D = "Magnus";
document.write (C === D);
document.write("<br>");
//C is exactly equal to D

document.write(5 > 2 && 10 > 4);
document.write("<br>");
//both statements have to be correct for a true value

document.write(5 > 10 || 10 > 4);
document.write("<br>");
// or statement, only one of two statements has to be correct for a true value

document.write(5 > 10 || 10 > 20);
document.write("<br>");
// or statement, only one of two statements has to be correct for a true value


function not_function() {
    document.getElementById("not").innerHTML = ! (20 > 10);
}
//if 20 being greater than 10 is false, true statement will be returned
// should get a false

function not1_function() {
    document.getElementById("not1").innerHTML = ! (5 > 10);
}
// if statement 5 is greater than 10 is false, then the true statement will be returned
//should get a true statement