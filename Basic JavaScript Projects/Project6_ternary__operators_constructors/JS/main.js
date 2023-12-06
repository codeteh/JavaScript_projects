document.write(Bigger = (5 > 1) ? "Cash is king":"Crypto is the now and forever");


function Ride_Function() {
    var height, Can_ride;
    height = document.getElementById("height").value;
    Can_ride = (height < 52)? "Beat it shrimp!!!":"Prepare to shit yourself!!!";
    document.getElementById("ride").innerHTML = Can_ride + " You're really not ready!!!";
}


function Vehicle (Make, Model, Year, Color) { //object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color= Color;
}
    var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
    var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById ("Keywords_and_Constructors").innerHTML =    
    "Erik drives a " +  Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +" manufactured in "  + Erik.Vehicle_Year;
}
    

function temperature(f) {
	return ((f - 32)*(5/9));
}
document.getElementById("New_and_This").innerHTML = "the temperature in celcius is" + temperature(7);












function count_Function() {
	document.getElementById("Counting").innerHTML = Count();
	function Count () {
		var Starting_point = 9;
		function Plus_one () {Starting_point += 1;} //nested function
		Plus_one ();
		return Starting_point;
    }
}


