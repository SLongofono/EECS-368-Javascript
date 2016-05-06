function integrate(tuples){
	var sum = 0;
	console.log(tuples);
	var boundB = tuples[tuples.length - 1].x;
	var boundA = tuples[0].x;
	for(var i=0;i<(tuples.length-1);i++){
		sum += ((tuples[i+1].x - tuples[i].x)*(tuples[i+1].y + tuples[i].y));
	}
	return (.5 * sum);
}
function xQuad(){
	var tempArr = [];
//	var boundA = $("#boundb").val();
//	var boundB = $("#bounda").val();
	var boundA_String = document.getElementById("bounda").innerHTML;
	var boundA_Int = parseInt(boundA_String);
	var boundB_String = document.getElementById("boundb").innerHTML;
	var boundB_Int = parseInt(boundB_String);

//	for(var i=boundA;i<=boundB;i++){
	for(var i=boundA_Int;i<=boundB_Int;i++){
		var tuple = {};
		tuple.x = i;
		tuple.y = Math.pow(i,2);
		tempArr.push(tuple);
	}
	return tempArr;
}
function xLin(){
	var tempArr = [];
//	var boundA = $("#boundb").val();
//	var boundB = $("#bounda").val();
	var boundA_String = document.getElementById("bounda").innerHTML;
	var boundA_Int = parseInt(boundA_String);
	var boundB_String = document.getElementById("boundb").innerHTML;
	var boundB_Int = parseInt(boundB_String);

	
//	for(var i=boundA;i<=boundB;i++){
	for(var i=boundA_Int;i<=boundB_Int;i++){
		var tuple = {};
		tuple.x = i;
		tuple.y = i;
		tempArr.push(tuple);
	}
	return tempArr;
}
//for testing, runs integrate() with xLin() as input
function integrateXLin(){
	document.getElementById("integral").innerHTML = integrate(xLin());
}
//for testing, runs integrate() with xQuad() as input
function integrateXQuad(){
	document.getElementById("integral").innerHTML = integrate(xQuad());
}
//final onpress function to run with parameters
function integrateFunc(){
	var func = document.getElementById("screen").innerHTML;
	console.log(func);
	//var boundA = $("#bounda").val(); //left
	//var boundB = $("#boundb").val(); //right
	var boundA_String = document.getElementById("bounda").innerHTML;
	var boundA_Int = parseInt(boundA_String);
	var boundB_String = document.getElementById("boundb").innerHTML;
	var boundB_Int = parseInt(boundB_String);
	
	//document.getElementById("integral").innerHTML = integrate(mapper(0,10,1));
	document.getElementById("integral").innerHTML = integrate(mapper(boundA_Int,boundB_Int,1));
}
//onpress function for integrating under function on screen
function drawIntegral(){
	refresh();
	var c = document.getElementById("graph");
	var ctext = c.getContext("2d");
	var tuples = mapper(-256,255,1);
	if(tuples.length < 1){
		tuples = deepCopy(defaultGraph);
	}
	scaleXCoords(tuples, xScaling);
	scaleYCoords(tuples, yScaling);
	//loops for each x
	for(var i=0;i<tuples.length;i++){
		//draws a rectangle with height y and width x at (x,y)
		ctext.fillRect((256+tuples[i].x),(256-tuples[i].y),(1*xScaling),tuples[i].y);
	}
	ctext.closePath();
	drawBorder();
}
