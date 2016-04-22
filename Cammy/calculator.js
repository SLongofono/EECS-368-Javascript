/**
 * @File: calculator.js
 * @authors:
 * @Date:
 */


var expression = ""; //global expression to be evaluated
var isNegative = false; //check if current expression is negative
var isParenthesis = false; //check if current expression has unclosed parenthesis

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
/*	Event Listeners for 0-9, +, -, /, *, (), ., clear	*/
document.getElementById("One").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("One").value;
	displayScreen();
});
document.getElementById("Two").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Two").value;
	displayScreen();
});
document.getElementById("Three").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Three").value;
	displayScreen();
});
document.getElementById("Four").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Four").value;
	displayScreen();
});
document.getElementById("Five").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Five").value;
	displayScreen();
});
document.getElementById("Six").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Six").value;
	displayScreen();
});
document.getElementById("Seven").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Seven").value;
	displayScreen();
});
document.getElementById("Eight").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Eight").value;
	displayScreen();
});
document.getElementById("Nine").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Nine").value;
	displayScreen();
});
document.getElementById("Zero").addEventListener('click', function() {
	if (expression.endsWith(")"))
		expression += "*";
	expression += document.getElementById("Zero").value;
	displayScreen();
});
document.getElementById("Plus").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Plus").value;
	}
	displayScreen();
});
document.getElementById("Minus").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an decimal, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Minus").value;
	}

	displayScreen();
});
document.getElementById("Multiply").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Multiply").value;
	}
	displayScreen();
});
document.getElementById("Divide").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Divide").value;
	}
	displayScreen();
});
document.getElementById("Parenthesis").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	else if (expression.endsWith(")"))
	{	//only allow single parenthesis over same expression
		expression = expression.slice(1,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression = "(" + expression + ")";
	}
	displayScreen();
});
document.getElementById("Decimal").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	else if (expression.endsWith(")"))
	{	//if the expression ends in parenthesis, replace parenthesis with decimal point
		expression = expression.slice(1,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Decimal").value;
	}
	displayScreen();
});
document.getElementById("ToClear").addEventListener('click', function() {
	expression = "";	//clears expression
	displayScreen();
});
document.getElementById("Exponent").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	if (expression != "")
	{	//if expression is blank, do not add operator
		expression += document.getElementById("Exponent").value;
	}
	displayScreen();
});
document.getElementById("ToEvaluate").addEventListener('click', function() {
	if (!checkValidExpression(expression))
	{	//if the expression ends with an operator, remove the last operator
		expression = expression.slice(0,expression.length-1);
	}
	//Note: "^" will need to be replaced with Math.pow // x^n = Math.pow(x,n)
	displayScreen();
});



//call calculator
calculator();