//Author: Cammy Vo

//global variable for left bound input
left_bound_expression = "";

//displays the left bound
function displayScreen_LeftBound() {
	document.getElementById("bounda").innerHTML = left_bound_expression;
}
//Adds Negative sign under condition of validity
document.getElementById("Minus_Left").addEventListener('click', function() {
	if (left_bound_expression == "")
	{
		left_bound_expression += "-";
	}
	displayScreen_LeftBound();
});
//takes out the last inputted number
document.getElementById("ToBackspace_Left").addEventListener('click', function() {
	left_bound_expression = left_bound_expression.slice(0,-1);
	displayScreen_LeftBound();
});
//clears the entire expression and sets it to 0
document.getElementById("ToClear_Left").addEventListener('click', function() {
	left_bound_expression = "0";
	displayScreen_LeftBound();
});

/*0-9 event listeners
adds 0-9 based on user input onto the current global string*/
document.getElementById("Zero_Left").addEventListener('click', function() {
	left_bound_expression += "0";
	displayScreen_LeftBound();
});
document.getElementById("One_Left").addEventListener('click', function() {
	left_bound_expression += "1";
	displayScreen_LeftBound();
});
document.getElementById("Two_Left").addEventListener('click', function() {
	left_bound_expression += "2";
	displayScreen_LeftBound();
});
document.getElementById("Three_Left").addEventListener('click', function() {
	left_bound_expression += "3";
	displayScreen_LeftBound();
});
document.getElementById("Four_Left").addEventListener('click', function() {
	left_bound_expression += "4";
	displayScreen_LeftBound();
});
document.getElementById("Five_Left").addEventListener('click', function() {
	left_bound_expression += "5";
	displayScreen_LeftBound();
});
document.getElementById("Six_Left").addEventListener('click', function() {
	left_bound_expression += "6";
	displayScreen_LeftBound();
});
document.getElementById("Seven_Left").addEventListener('click', function() {
	left_bound_expression += "7";
	displayScreen_LeftBound();
});
document.getElementById("Eight_Left").addEventListener('click', function() {
	left_bound_expression += "8";
	displayScreen_LeftBound();
});
document.getElementById("Nine_Left").addEventListener('click', function() {
	left_bound_expression += "9";
	displayScreen_LeftBound();
});
/*end 0-9 event listeners*/
