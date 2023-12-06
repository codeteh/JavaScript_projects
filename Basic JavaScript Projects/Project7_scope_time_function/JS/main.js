/*scope is the functions, variables, and objects you have 
access to. Variable A is global so all functions can use
 it, variable B is local so only some functions can use it*/
A = 10
function Mult_numbers_1 () {
	var B = 0.5;
	document.write((10 * A) + "<br>");
	document.write(((10 * A)*(B)) + "<br>");
	console.log((10 * A) + "<br>");
	console.log(((10 * A)*(B)) + "<br>");
}
function Add_numbers_1() {
	document.write((A + 90) +"<br>");
	document.write(A + B) +"<br>"; 
	console.log((A + 90) +"<br>");
	console.log(A + B) +"<br>";// variable B is not local to this function. if you open the console, you’ll see the error “X is not defined
}


if (1 < 2) {
	document.write (" The left number is smaller than the number on the right. <br> ")
}//if function, conditional statement that specifies that a section of code is to be executed if a condition is true

function get_Date() {
	if (new Date().getHours() >20) {
	document.getElementById("Greeting").innerHTML = "Isn't it kind of late?";
	}
}






Mult_numbers_1();
Add_numbers_1();
