

function verse_1 () {
	var part_1 = "Kiki, do you love me? Are you riding? <br> ";
	var part_2 = "Say you'll never ever leave from beside me <br> ";
	var part_3 = "'Cause I want ya, and I need ya <br> ";
	var part_4 = "And I'm down for you always <br> ";
	var whole_sentence = part_1.concat(part_2, part_3, part_4);
	document.getElementById("Concatenate").innerHTML = whole_sentence
}//concat method piecing together lines from a song

function slice_Method() {
	var Sentence = "All work and no play make Johnny a dull boy.";
	var Section = Sentence.slice(0,20) ; //slice method extracts a secion of string and returns it in a new string
	document.getElementById("Slice").innerHTML = Section;
}//numbers 0, 20 indicate which characters in your string will be cut out 


function string_Method () {
	var X = 999;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}//“toString()” method returns a number as a string. 


function precision_Method() {
	var X = 47836.368468394736273;
	document.getElementById("Precision").innerHTML = X.toPrecision(6);
}//The toPrecision() method formats a number to a specified length. 


