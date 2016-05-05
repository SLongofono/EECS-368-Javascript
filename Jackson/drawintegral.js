//assumed to be in the scope of stephen's graphing code
function drawIntegral(tuples){
	var c = document.getElementById("graph");
	var ctext = c.getContext("2d");
	//copy of tuples
	lastTuples = deepCopy(tuples);
	scaleXCoords(tuples, xScaling);
	scaleYCoords(tuples, yScaling);
	ctext.beginPath();
	ctext.strokeStyle="#000000";
	ctext.lineWidth=1;
	ctext.moveTo(0,256);
	//loops for each x
	for(var i=0;i<tuples.length;i++){
		//accounts for each y starting at tuple value down to y=1
		//conditional required for functions below the x-axis
		if(tuples[i].y>0){
			for(var j=0;j<tuples[i].y;j++){
				ctext.lineTo((256+tuples[i].x),(256-(tuples[i].y - j)));
				ctext.stroke();
				ctext.moveTo((256+tuples[i].x),(256-(tuples[i].y - j)));
			}
		}
		else if(tuples[i].y<0){
			for(var j=0;j<tuples[i].y;j++){
				ctext.lineTo((256+tuples[i].x),(256-(tuples[i].y + j)));
				ctext.stroke();
				ctext.moveTo((256+tuples[i].x),(256-(tuples[i].y + j)));
			}
		}
		else if(tuples[i].y==0){
			//integral is zero so
			ctext.lineTo((256+tuples[i].x),(256-tuples[i].y));
			ctext.stroke();
			ctext.moveTo((256+tuples[i].x),(256-tuples[i].y));
		}
		else{
			//out of bounds
		}
	}
	ctext.closePath();
	drawBorder();
}
