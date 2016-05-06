
var input = "";
var notfunc = "";
var x = 10;

function evaluateThis(){
	input = document.getElementById("screen").innerHTML;
	while(replaceCaret(input))
	{
		//Do nothing.
		//This loops so that every caret is found and replaced.
	}
	var output = eval(input);
	document.getElementById("results").innerHTML = output;
}

function mapper(leftBound, rightBound, stepSize){
	var arrayMap = [];
	var y = 0;


	input = document.getElementById("screen").innerHTML;
	
	if(input=="")
	{
		return arrayMap;	
	}
	
	notfunc = document.getElementById("screen").innerHTML;

	
	//Start at left bound, go to right bound in steps of size stepSize.
	for(i=leftBound; i<rightBound+stepSize; i+=stepSize)
	{

		var tuple = {};
		//This line assumes 'x' is used as the variable in the input from the html.
		x = i;

		while(replaceCaret(input))
		{
			//Do nothing.
			//This loops so that every caret is found and replaced.
		}

		y = eval(input);

		tuple.x = i;
		tuple.y = y
		arrayMap.push(tuple);

		input = notfunc;
	}
	
	return arrayMap;
}

//This function looks for carets, matches them to an x^a expression, and replaces that expression with its numerical value.
function replaceCaret(){
	var caretIndex = input.indexOf("^");
	if(caretIndex == -1)
	{
		//Since we found no caret, we return false.
		return false;
	}
	else
	{
		//startIndex will hold the starting index of the base x in the expression x^a
		//endIndex will hold the ending index of the exponent a in the expression x^a
		var startIndex = 0;
		var endIndex = input.length;

		//leftHand will hold the base x
		//rightHand will hold the exponent a
		//For now, each holds everything to the left or right of the caret in question.
		var leftHand = input.slice(startIndex, caretIndex);
		var rightHand = input.slice(caretIndex+1, endIndex);

/**		alert(leftHand);
		alert(rightHand);
**/		
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
			startIndex = findStartIndex(caretIndex);
		}
		if(input.charAt(caretIndex+1) == '(')
		{
			endIndex = input.indexOf(')');
		}
		else
		{
			endIndex = findEndIndex(caretIndex);
		}

		//Here these strings are sliced apart into the base, the exponent, and everything before and after the x^a expression.
		leftRemainder = input.slice(0, startIndex);
		leftHand = input.slice(startIndex, caretIndex);
		rightHand = input.slice(caretIndex+1, endIndex+1);
		rightRemainder = input.slice(endIndex+1, input.length);
		
		//Here we evaluate the x^a expression.
		powerString = getPowerValue(leftHand, rightHand);

		//We rebuild the input string.
		input = leftRemainder + powerString + rightRemainder;
		


/**	These alerts are for testing the slicing above.
		alert(leftRemainder);
		alert(leftHand);
		alert(rightHand);
		alert(rightRemainder);
		alert(input);
**/
		//Since we found and replaced a caret, we return true.
		return true;
	}

}

//This function returns the index of the first number character AFTER one of these four operators.
function findStartIndex(caretIndex)
{
	var start = 0;

	for(i=caretIndex-1; i>-1; i--)
	{
		if (input.charAt(i)=='+' || input.charAt(i)=='-' || input.charAt(i)=='*' || input.charAt(i)=='/'|| input.charAt(i)=='(')
		{
			start = i+1;
			return start;
		}
	}
	
	return start;
}

//This function returns the index of the first number character BEFORE one of these four operators.
function findEndIndex(caretIndex)
{
	var end = input.length;

	for(i=caretIndex+1; i<input.length; i++)
	{
		if (input.charAt(i)=='+' || input.charAt(i)=='-' || input.charAt(i)=='*' || input.charAt(i)=='/'|| input.charAt(i)==')')
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
