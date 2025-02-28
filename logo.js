let canvas;
let s = 20;

function setup(){
	canvas = createCanvas(160,30);
	canvas.parent('logo');
	clear();

	colorMode(HSB,100);
	rectMode(CENTER);
}

function draw() {
	
	clear();
	
	translate(-8,height/2);
	
	let rc = map(sin(frameCount*0.001),-1,1,0,100);

	if(mouseX<200 && mouseY<50){
		fill(rc,90,90);
	}else{
		fill(0);
	}
	



	noStroke();
	// stroke(255); strokeWeight(10);
	ellipse(24,0,24);

	ellipse(48,0,24);
	rect(66,0,13,23);




}