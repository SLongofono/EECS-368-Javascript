//v1.0 
//takes in tuples, outputs value as an int

//returns value of integral in string form or error
//assumes tuples[].x and tuples[].y are defined as an ordered pair
function integrate(tuples){
	var sum = 0;
	var boundB = tuples[tuples.length - 1].x
	var boundA = tuples[0].x
	for(var i=0;i<(tuples.length-1);i++){
		sum += ((tuples[i+1].x - tuples[i].x)*(tuples[i+1].y + tuples[i].y));
	}
	return (.5 * sum);
}

//for testing, returns tuples array with x and y corresponding to y=x^2, bounds hard coded
function xQuad(){
	var tempArr = [];
	for(var i=0;i<=10;i++){
		var tuple = {};
		tuple.x = i;
		tuple.y = Math.pow(i,2);
		tempArr.push(tuple);
	}
	return tempArr;
}
//for testing, returns tuples array with x and y corresponding to y=x, bounds hard coded
function xLin(){
	var tempArr = [];
	for(var i=0;i<=10;i++){
		var tuple = {};
		tuple.x = i;
		tuple.y = i;
		tempArr.push(tuple);
	}
	return tempArr;
}