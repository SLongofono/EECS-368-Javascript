/**
 * @File: calculator.js
 * @authors:
 * @Date:
 */


var expression = ""; //global expression to be evaluated
var isNegative = false; //check if current expression is negative
var isParenthesis = false; //check if current expression has unclosed parenthesis
var isExponent = false; //check if current expression is in an exponent (only allow 0-9)
var isDecimal = false; //check if current expression is already a floating point number

/*	Main Calculator Function	*/
function calculator() {

	displayScreen();
}
/*	Screen Display	*/
function displayScreen() {
	document.getElementById("screen").innerHTML = expression;
}

/*	Checks if expression ends with an operator, returns false if it does, true if it doesn't	*/
function checkValidExpression(expr)
{
	if (expr.endsWith(".") || expr.endsWith("^") || expr.endsWith("+") || expr.endsWith("-") || expr.endsWith("*") || expr.endsWith("/"))
	{
		return false;
	}
	return true;
}
/*	Event Listeners for 0-9, +, -, /, *, (), ., x, ^, clear
*	Each event listener will only add its variable if valid conditions are met
*/
document.getElementById("One").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*";
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("One").value;
	}
	displayScreen();
});
document.getElementById("Two").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Two").value;
	}
	displayScreen();
});
document.getElementById("Three").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Three").value;
	}
	displayScreen();
});
document.getElementById("Four").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Four").value;
	}
	displayScreen();
});
document.getElementById("Five").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Five").value;
	}
	displayScreen();
});
document.getElementById("Six").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Six").value;
	}
	displayScreen();
});
document.getElementById("Seven").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
	if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Seven").value;
	}
	displayScreen();
});
document.getElementById("Eight").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
		if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Eight").value;
	}
	displayScreen();
});
document.getElementById("Nine").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
		if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Nine").value;
	}
	displayScreen();
});
document.getElementById("Zero").addEventListener('click', function() {
	if (expression.endsWith(")"))
	{ 
		expression += "*"; 
		isDecimal = false; 
	}
		if (!expression.endsWith("x"))
	{
		expression += document.getElementById("Zero").value;
	}
	displayScreen();
});
document.getElementById("Plus").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "")
	{	

		expression += document.getElementById("Plus").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("Minus").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "")
	{	
		
		expression += document.getElementById("Minus").value;
		isDecimal = false;
	}

	displayScreen();
});
document.getElementById("Multiply").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "")
	{	

		expression += document.getElementById("Multiply").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("Divide").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "")
	{	

		expression += document.getElementById("Divide").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("Parenthesis").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "" && !expression.endsWith(")"))
	{	
		expression = "(" + expression + ")";
	}
	
	displayScreen();
});
document.getElementById("Decimal").addEventListener('click', function() {
	if (checkValidExpression(expression) && !expression.endsWith("x") && expression != "" && !isDecimal && !expression.endsWith(")") && !expression.endsWith("x"))
	{	
		expression += document.getElementById("Decimal").value;
		isDecimal = true;
	}
	
	displayScreen();
});
document.getElementById("ToClear").addEventListener('click', function() {
	expression = "";	//clears expression
	document.getElementById("results").innerHTML = ""; //clears results
	isNegative = false; //resets values
	isParenthesis = false; 
	isExponent = false; 
	isDecimal = false;
	displayScreen();
	
});
document.getElementById("Variable").addEventListener('click', function() {
	if (!expression.endsWith("x") && !expression.endsWith("."))
	{
		expression += document.getElementById("Variable").value;
	}
	displayScreen();
	
});
document.getElementById("Exponent").addEventListener('click', function() {
	if (checkValidExpression(expression) && expression != "" && !isExponent)
	{	

		expression += document.getElementById("Exponent").value;
		isExponent = true;
	}
	
	displayScreen();
});
document.getElementById("ToEvaluate").addEventListener('click', function() {
	if (expression.endsWith("."))
	{
		expression += "0";
	}
	if (checkValidExpression(expression))
	{
		expression = "("+expression+")";
	}
	
	displayScreen();
});

//call calculator
calculator();