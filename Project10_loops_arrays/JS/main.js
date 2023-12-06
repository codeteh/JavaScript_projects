
function count_To_Ten() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Counting_to_Ten").innerHTML = Digit;
}//while loop loops through a block of code for as long as a specified condition is true


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//For Loop is used to repeat a section of code a number of times
	for (Y= 0; Y < Instruments.length; Y++) {
	Content += Instruments [Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics() {
	var Cat_Picture = [];
	Cat_Picture[0] = "sleeping";
	Cat_Picture[1] = "playing";
	Cat_Picture[2] = "eating";
	Cat_Picture[3] = "purring";
	document.getElementById("Cat").innerHTML = "In this picture, the cat is  " + Cat_Picture[1] + ". ";
}
//array is a collection of data, arranged in rows and columns.It is a group of related things that are stored together in a sequence.

var C = 82;
document.write(C);
{
	let C = 33; //let keyword declares variables that can have block scope. 
	document.write("<br>" + C);
}
document.write("<br>" + C);
