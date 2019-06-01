var board=document.getElementById("draw-board");
var flickSwitch="off";
var clearBar=document.getElementById("clearbar");
var backOps=document.getElementsByClassName("back");

//include variables here...
var drawing_panel={};

var options_panel={};


//Add functions here, they may be defined elsewhere. 
var utils={
	draw: function(){
	},
	color: function(){
	},
	changeBack: function(){

	},
	reveal: function(){

	},
	clear: function(){
	}
};	


function draw(){
	
	var ink=document.createElement("div");
	board.appendChild(ink);
	ink.style.position="absolute";
	ink.style.left = getCoordinates()[0]+'px';
	ink.style.top = getCoordinates()[1]+'px';
	ink.style.backgroundColor=document.getElementById("take-color").value;
	
	return flickSwitch;
	
	
}

function flow(){
	if(flickSwitch=="on"){
		draw();
		
	}
}

function getCoordinates(){
	var natesArray=[];
	var x=event.clientX;
	var y=event.clientY;
	natesArray=[x,y];
	return natesArray;

}
function flickOn(){
	flickSwitch="on";
	
	return flickSwitch;
}
function flickOff(){
	flickSwitch="off";
	
	return flickSwitch;
}


function clear() {
	board.innerHTML="";
}
var backgrounds={
	one: "./images/rain.jpeg",
	two: "./images/forest.jpg",
	three:"./images/meadow.jpg",
	four: "./images/football.jpeg",
	five:"./images/grass.jpeg",
	six: "./images/house.jpg"

}

var backArr=["./images/rain.jpeg", "./images/forest.jpg","./images/meadow.jpg","./images/football.jpeg","./images/grass.jpeg","./images/home.png"];

function babyGotBack() {
	
	var imgAddress=backgrounds[this.id];
	board.setAttribute("style", `background-image: url(${imgAddress});`);
}

board.addEventListener("click", draw);
board.addEventListener("mousemove", flow);
board.addEventListener("mouseup", flickOff);
board.addEventListener("mousedown", flickOn);

clearBar.addEventListener("click", clear);
for(var i=0; i<backOps.length; i++){
	backOps[i].addEventListener("click", babyGotBack);
	backOps[i].setAttribute("style", `background-image: url(${backArr[i]});`)
}

