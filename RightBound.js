
right_bound_expression = "";

function displayScreen_RightBound() {
	document.getElementById("boundb").innerHTML = right_bound_expression;
}
document.getElementById("ToBackspace_Right").addEventListener('click', function() {
	right_bound_expression = right_bound_expression.slice(0,-1);
	displayScreen_RightBound();
});
document.getElementById("ToClear_Right").addEventListener('click', function() {
	right_bound_expression = "";
	displayScreen_RightBound();
});
document.getElementById("Zero_Right").addEventListener('click', function() {
	right_bound_expression += "0";
	displayScreen_RightBound();
});
document.getElementById("One_Right").addEventListener('click', function() {
	right_bound_expression += "1";
	displayScreen_RightBound();
});
document.getElementById("Two_Right").addEventListener('click', function() {
	right_bound_expression += "2";
	displayScreen_RightBound();
});
document.getElementById("Three_Right").addEventListener('click', function() {
	right_bound_expression += "3";
	displayScreen_RightBound();
});
document.getElementById("Four_Right").addEventListener('click', function() {
	right_bound_expression += "4";
	displayScreen_RightBound();
});
document.getElementById("Five_Right").addEventListener('click', function() {
	right_bound_expression += "5";
	displayScreen_RightBound();
});
document.getElementById("Six_Right").addEventListener('click', function() {
	right_bound_expression += "6";
	displayScreen_RightBound();
});
document.getElementById("Seven_Right").addEventListener('click', function() {
	right_bound_expression += "7";
	displayScreen_RightBound();
});
document.getElementById("Eight_Right").addEventListener('click', function() {
	right_bound_expression += "8";
	displayScreen_RightBound();
});
document.getElementById("Nine_Right").addEventListener('click', function() {
	right_bound_expression += "9";
	displayScreen_RightBound();
});