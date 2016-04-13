/**
 * @authors:
 * 
 */

//global expression to be evaluated
var expression = "";


/*
*	Main Calculator Function
*/
function calculator() {
	

	displayScreen();
}
/*
*	Screen Display
*/
function displayScreen() {
	//document.getElementById("screen_span").innerHTML = expression;
	document.getElementById("screen").innerHTML = expression;
}

/*
*	Event Listeners for 0-9, +, -, /, *, (), clear
*/
document.getElementById("One").addEventListener('click', function() {
	expression += document.getElementById("One").value;
	displayScreen();
});
document.getElementById("Two").addEventListener('click', function() {
	expression += document.getElementById("Two").value;
	displayScreen();
});
document.getElementById("Three").addEventListener('click', function() {
	expression += document.getElementById("Three").value;
	displayScreen();
});
document.getElementById("Four").addEventListener('click', function() {
	expression += document.getElementById("Four").value;
	displayScreen();
});
document.getElementById("Five").addEventListener('click', function() {
	expression += document.getElementById("Five").value;
	displayScreen();
});
document.getElementById("Six").addEventListener('click', function() {
	expression += document.getElementById("Six").value;
	displayScreen();
});
document.getElementById("Seven").addEventListener('click', function() {
	expression += document.getElementById("Seven").value;
	displayScreen();
});
document.getElementById("Eight").addEventListener('click', function() {
	expression += document.getElementById("Eight").value;
	displayScreen();
});
document.getElementById("Nine").addEventListener('click', function() {
	expression += document.getElementById("Nine").value;
	displayScreen();
});
document.getElementById("Zero").addEventListener('click', function() {
	expression += document.getElementById("Zero").value;
	displayScreen();
});
document.getElementById("Plus").addEventListener('click', function() {
	expression += document.getElementById("Plus").value;
	displayScreen();
});
document.getElementById("Minus").addEventListener('click', function() {
	expression += document.getElementById("Minus").value;
	displayScreen();
});
document.getElementById("Multiply").addEventListener('click', function() {
	expression += document.getElementById("Multiply").value;
	displayScreen();
});
document.getElementById("Divide").addEventListener('click', function() {
	expression += document.getElementById("Divide").value;
	displayScreen();
});
document.getElementById("Parenthesis").addEventListener('click', function() {
	expression = "(" + expression + ")";
	displayScreen();
});
document.getElementById("ToClear").addEventListener('click', function() {
	expression = "";
	displayScreen();
});

/*
document.getElementById("Exponent").addEventListener('click', function() {
	//
});
document.getElementById("ToEvaluate").addEventListener('click', function() {
	//
});
*/


//call calculator
calculator();