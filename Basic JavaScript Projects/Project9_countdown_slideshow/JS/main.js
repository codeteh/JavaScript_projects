// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}
  //slideIndex variable is a marker for which picture is currently being shown (when slideIndex is one, show the first picture. When slideIndex is two, show the second, etc.
function showSlides(n) {
	let i;//Variables defined with let cannot be Redeclared. 
	let slides = document.getElementsByClassName("mySlides");//var is function scoped while let is block scoped 
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
  }




function countdown() {
	var seconds = document.getElementById("seconds").value; //takes input from user to be applied to function below
	
    function tick() {
	    seconds = seconds - 1; //input has 1 subtracted from it
	    timer.innerHTML = seconds;
	    var time = setTimeout(tick, 1000);//“setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
	    if (seconds == -1) { 
		    alert("Time's up!");
		    clearTimeout (time) ;
		    timer.innerHTML = "";
	    }
    }
    tick();
}
//if input is a decimal program doesn't stop 