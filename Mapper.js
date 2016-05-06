//Author: Michael Neises
//Date Modified: May 6, 2016
//Purpose: to handle intermediate steps in a graphing calculator

var input = "";
var notfunc = "";
var x = 10;

//The evaluateThis function simply evaluates an expression, captured in the "screen" element.
function evaluateThis(){

	input = document.getElementById("screen").innerHTML;
	
	//For as long as input has a caret, parse them out
	while(input.indexOf("^")!=-1)
	{
		input = replaceCaret(input);
	}

	var output = eval(input);
	document.getElementById("results").innerHTML = output;
}
//The mapper function evaluates an expression based on the input parameters, and returns an array of points on the function.
function mapper(leftBound, rightBound, stepSize){
	input = document.getElementById("screen").innerHTML;
	notfunc = input;
	var arrayMap = [];
	var y = 0;
	
	if(input=="")
	{
		return arrayMap;	
	}

	//Start at left bound, go to right bound in steps of size stepSize.
	for(var i=leftBound; i<(rightBound+stepSize); i+=stepSize)
	{
		var tuple = {};
		//This line assumes 'x' is used as the variable in the input from the html.
		x = i;

		//For as long as input has a caret, parse them out
		while(input.indexOf("^")!=-1)
		{
			input = replaceCaret(input);
		}

		y = eval(input);
		tuple.x = i;
		tuple.y = y;
		arrayMap.push(tuple);
//		console.log(tuple.x);
//		console.log(tuple.y);
		input = notfunc;
	}
	
	return arrayMap;
}
//This function looks for carets, matches them to an x^a expression, and replaces that expression with its numerical value.
function replaceCaret(myInput){
	var caretIndex = myInput.indexOf("^");

	//startIndex will hold the starting index of the base x in the expression x^a
	//endIndex will hold the ending index of the exponent a in the expression x^a
	var startIndex = 0;
	var endIndex = myInput.length;
	
	//leftHand will hold the base x
	//rightHand will hold the exponent a
	//For now, each holds everything to the left or right of the caret in question.
	var leftHand = myInput.slice(startIndex, caretIndex);
	var rightHand = myInput.slice(caretIndex+1, endIndex);

	//leftRemainder will hold whatever is to the left of the base
	//rightRemainder will hold whatever is to the right of the exponent
	var leftRemainder = "";
	var rightRemainder = "";

	//With these conditionals, we check for parentheses, whose operator precedence negates the need to search for a start/end index.
	if(input.charAt(caretIndex-1) == ')')
	{
		startIndex = leftHand.lastIndexOf('(');
	}
	else
	{
		startIndex = findStartIndex(myInput, caretIndex);
	}
	if(input.charAt(caretIndex+1) == '(')
	{
		endIndex = leftHand.length + 1 + rightHand.indexOf(')');
	}
	else
	{
		endIndex = findEndIndex(myInput, caretIndex);
	}

	//Here these strings are sliced apart into the base, the exponent, and everything before and after the x^a expression.
	leftRemainder = myInput.slice(0, startIndex);
	leftHand = myInput.slice(startIndex, caretIndex);
	leftHand = myInput.slice(startIndex, caretIndex);
	rightHand = myInput.slice(caretIndex+1, endIndex+1);
	rightRemainder = myInput.slice(endIndex+1, input.length);
		
/**		
	These alerts are for testing the slicing above.
	console.log(leftRemainder);
	console.log(leftHand);
	console.log(rightHand);
	console.log(rightRemainder);
**/
		
	//If the base a in a^x contains a power, we evaluate that first.
	if(leftHand.indexOf("^")!=(-1))
	{
		leftHand = replaceCaret(leftHand);
	}

	//If the exponent x in a^x contains a power, we evaluate that first, but only if it has parentheses precedence.
	if(myInput.charAt(caretIndex+1) == '(')
	{
		if(rightHand.indexOf("^")!=(-1))
		{
			rightHand = replaceCaret(rightHand);
		}
	}
		
	//Here we evaluate the x^a expression.
	powerString = getPowerValue(leftHand, rightHand);

	//We rebuild the input string.
	myInput = leftRemainder + powerString + rightRemainder;

//	console.log(myInput);

	//We return the newly built string.
	return myInput;

}
//This function returns the index of the first number character AFTER one of these four operators.
function findStartIndex(myInput, caretIndex)
{
	var start = 0;
	for(i=caretIndex-1; i>-1; i--)
	{
		if (myInput.charAt(i)=='+' || myInput.charAt(i)=='-' || myInput.charAt(i)=='*' || myInput.charAt(i)=='/'|| myInput.charAt(i)=='(')
		{
			start = i+1;
			return start;
		}
	}
	
	return start;
}
//This function returns the index of the first number character BEFORE one of these four operators.
function findEndIndex(myInput, caretIndex)
{
	var end = input.length;
	for(i=caretIndex+1; i<myInput.length+1; i++)
	{
		if (myInput.charAt(i)=='+' || myInput.charAt(i)=='-' || myInput.charAt(i)=='*' || myInput.charAt(i)=='/'|| myInput.charAt(i)==')')
		{
			end = i-1;
			return end;
		}
	}
	
	return end;
}
//This function evaluates the x^a expression.
function getPowerValue(left, right)
{
	var powerValue = Math.pow(eval(left), eval(right));
	var powerString = powerValue.toString();
	return powerString;
}
