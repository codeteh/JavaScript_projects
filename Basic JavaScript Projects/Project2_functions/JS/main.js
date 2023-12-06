alert("write a function");
window.alert("write a function!"); //window alert
function My_First_Function() {
    var str = "This is the button text";
    str += " that appears when you click the button"
    document.getElementById ("Button_Text") .innerHTML = str; //innerhtml modifies content of html element
}

function myFunction() {
    var sentence = "I am learning"; 
    sentence += " a lot from this book!" // += operator
    document.getElementById ("Concatenate") .innerHTML = sentence; // innerhtml modifies content of html element
}