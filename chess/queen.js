obj queen = {
	direction:"S"
	position:{
		x: 4
		y: 0
	}
}

var userDirection= prompt("Enter Direction","S");
var userSteps= prompt("Enter Steps",0);

changedirection(steps,userDirection);

function changedirection(steps,direction){
	switch(direction){
		case 'S':
		temp = queen.position.x+steps;
		if(boundaryCheck(temp)){
			queen.position.x=temp;
		}
		else{
			console.log("Cross Broundary")
		}
	}
	
	switch(direction){
		case 'E':
		 queen.position.y = queen.position.Y+steps;
	}
	
	switch(direction){
		case 'N':
		queen.position.x = queen.position.x-steps;
	}
	
	switch(direction){
		case 'NW':
		queen.position.x = queen.position.x+steps;
		queen.position.y = queen.position.Y-steps;
	}
	
	switch(direction){
		case 'NE':
		queen.position.x = queen.position.x-steps;
		queen.position.y = queen.position.Y+steps;
	}
	
	switch(direction){
		case 'SE':
		queen.position.x = queen.position.x-steps;
		queen.position.y = queen.position.Y+steps;
	}
	
	switch(direction){
		case 'SW':
		queen.position.x = queen.position.x+steps;
		queen.position.y = queen.position.Y-steps;
	}
	
	switch(direction){
		case 'W':
		queen.position.y = queen.position.Y-steps;
	}
	
	default:
	console.log("Can't Move")
}

function boundaryCheck(pos) {
	if()
	return true;
	else
	return false;
}

function positionlog(){
	while(boundaryCheck){
		console.lof(queen.position);
	}
}
