/**
 * @File: calculator.js
 * @authors: Cammy Vo
 */

var expression = ""; //global expression to be evaluated
var isParenthesis = false; //check if current expression has unclosed parenthesis
var isDecimal = false; //check if current expression is already a floating point number

//Screen Display
function displayScreen() {
	document.getElementById("screen").innerHTML = expression;
}

//Checks if expression ends with an operator, returns false if it does, true if it doesn't
function checkValidExpression()
{
	if (expression.endsWith("(") || expression.endsWith(".") || expression.endsWith("^") || expression.endsWith("+") || expression.endsWith("-") || expression.endsWith("*") || expression.endsWith("/"))
	{
		return false;
	}
	return true;
}
/*	Event Listeners for 0-9, +, -, /, *, (, ), ., x, ^
*	Some event listeners will add extra variables corresponding to the variable before it
*	Each event listener will only add its variable if valid conditions are met then calls display screen
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
	if (checkValidExpression() && expression != "")
	{	

		expression += document.getElementById("Plus").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("Minus").addEventListener('click', function() {
	if (checkValidExpression() && expression != "")
	{	
		
		expression += document.getElementById("Minus").value;
		isDecimal = false;
	}

	displayScreen();
});
document.getElementById("Multiply").addEventListener('click', function() {
	if (checkValidExpression() && expression != "")
	{	

		expression += document.getElementById("Multiply").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("Divide").addEventListener('click', function() {
	if (checkValidExpression() && expression != "")
	{	

		expression += document.getElementById("Divide").value;
		isDecimal = false;
	}
	displayScreen();
});
document.getElementById("LeftParen").addEventListener('click', function() {
	if (checkValidExpression() && expression != "")
	{
		expression += "*";
	}
	if (!expression.endsWith(")") && !expression.endsWith("."))
	{	
		expression += document.getElementById("LeftParen").value;
	}
	
	displayScreen();
});
document.getElementById("RightParen").addEventListener('click', function() {
	if (expression.indexOf("(") != -1 && checkValidExpression() && expression != "" && !expression.endsWith(")"))
	{	
		expression += document.getElementById("RightParen").value;
	}
	
	displayScreen();
});
document.getElementById("Decimal").addEventListener('click', function() {
	if (checkValidExpression() && !expression.endsWith("x") && expression != "" && !isDecimal && !expression.endsWith(")") && !expression.endsWith("x"))
	{	
		expression += document.getElementById("Decimal").value;
		isDecimal = true;
	}
	
	displayScreen();
});
document.getElementById("Variable").addEventListener('click', function() {
	if (!expression.endsWith("x") && !expression.endsWith("."))
	{
		if (checkValidExpression(expression) && expression != "")
		{
			expression += "*";
		}
		expression += document.getElementById("Variable").value;
	}
	displayScreen();
	
});
document.getElementById("Exponent").addEventListener('click', function() {
	if (checkValidExpression() && expression != "")
	{	

		expression += document.getElementById("Exponent").value;
		
	}
	
	displayScreen();
});
/*End Event Listeners for 0-9, +, -, /, *, (), ., x, ^*/

//Clears expression and conditions
//Displays screen
document.getElementById("ToClear").addEventListener('click', function() {
	expression = "";	//clears expression
	isParenthesis = false; //clears variables
	isDecimal = false;
	displayScreen();
	
});
//Removes last character from string
//Calls Displays Screen
document.getElementById("ToBackspace").addEventListener('click', function() {
	expression = expression.slice(0,-1);
	displayScreen();
});
//Checks valid evaluating conditions
//Calls checkParenthesis to check parentehsis validity
//Adds extra variables in case of expression evaluating badly based on ending syntax
//Adds parenthesis if evaluation is pressed
document.getElementById("ToEvaluate").addEventListener('click', function() {
	//call checkParenthesis
	checkParenthesis();

	//if expression ends with an operator, add a variable that won't change the expression
	//and to allow evaluation
	if (expression.endsWith(".") || expression.endsWith ("+") || expression.endsWith("-"))
	{
		expression += "0";
	}
	
	if (expression.endsWith("*") || expression.endsWith ("^") || expression.endsWith("/"))
	{
		expression += "1";
		
	}
	
	//wraps the expression in parenthesis after evaluation
	if (checkValidExpression() && !expression.endsWith(")"))
	{
		expression = "("+expression+")";
	}

	//removes any *) that might pass false conditions and replace it with a )
	expression = expression.replace("*)",")");
	//removes any remaining ()
	expression = expression.replace("()","");
	displayScreen();
});


//Checks the parenthesis are valid
//Removes extra invalid parenthesis
//Adds some extra required parentehsis
function checkParenthesis()
{
	var leftp = 0;
	var rightp = 0;
	//if expression ends with an operator, add a variable that won't change the expression
	//and to allow evaluation
	if (expression.endsWith(".") || expression.endsWith ("+") || expression.endsWith("-"))
	{
		expression += "0";
	}
	
	if (expression.endsWith("*") || expression.endsWith ("^") || expression.endsWith("/"))
	{
		expression += "1";
		
	}
	//Loops through entire expression and checks how many parenthesis are mismatched
	for (var i = 0; i < expression.length; i++)
	{
		if (expression.charAt(i) == "(")
		{
			leftp++;
		}
		if (expression.charAt(i) == ")")
		{
			rightp++;
		}
	}
	//Adds parenthesis to mismatched area with less parenthesis
	while (leftp > rightp)
	{
		expression += ")";
		rightp++;
	}
	while (rightp > leftp)
	{
		expression = "(" + expression;
		leftp++;
	}
	//Takes out any empty parenthesis created 
	for (var i = 0; i < expression.length-1; i++)
	{
		expression = expression.replace("()","");
	}
	displayScreen();
}
//call display screen
displayScreen();
