//Global Variables Set Up
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 800
const CELL_SIZE = 20
const ROW_AMOUNT = CANVAS_HEIGHT/20
const COLUMN_AMOUNT = CANVAS_WIDTH/20
const NOISE_SCALE = 0.005
const ROW_SIZE = CELL_SIZE
const COLUMN_SIZE = CELL_SIZE

//this function builds the main grid function for the whole project
//included noise based grid fill and  calls pattern class
//this is my main function, everything will get called in here including the
//pattern
function drawNoisePattern (x,y){
    for (let i = 0; i < COLUMN_AMOUNT; i++) {
      for (let n = 0; n < ROW_AMOUNT; n++) {
        let x = i * CELL_SIZE;
        let y = n * CELL_SIZE;
        let noiseValue = noise(x*NOISE_SCALE,y*NOISE_SCALE);
        if (noiseValue > 0.5){
            fill(0); // moving rect function inline as we need to 
            //add the pattern part
            rect(x, y, CELL_SIZE, CELL_SIZE);
            //TO DO _add pattern class here_
            thickCross (x,y,20);
            // dev principle - build the simplest thing that works 
        }
        else {
            fill(255);
            rect(x, y, CELL_SIZE, CELL_SIZE);
            
        }
        
      }
    }
}
// function concentric circle pattern 
//what do I need in this? I need the X and Y - 
//random to see which circle pattern will happen 
//if they exist is handled by draw noiseNoisePattern
function concentricCircle (x,y,size,circleNumber){
    push();
    translate(x + CELL_SIZE / 2, y + CELL_SIZE / 2);
    noStroke(0);
    drawConcentricCircle(size, circleNumber);
    pop();
}
// draws rings around the already-translated cell center, so recursion
// only ever needs to shrink the size, never touch the origin again
function drawConcentricCircle (size, circleNumber){
    //THIS WILL USE RECURSION
    const minSize = 15/3;
    if (size < minSize) return;

    //asks "am I odd or even?"
    if (circleNumber % 2== 0){
        fill (0) //remeber this is like a paint brush
        //we need to load it BEFORE we draw the circles
    }
    else{ fill(255) }
    ellipse(0, 0, size);
    drawConcentricCircle(size * 0.7, circleNumber + 1);
}
function concentricCircleColour (x,y,size,circleNumber){
    //random boolean to decide if colours are inverse or not
    const concentricCircleColourType = random(0,1);
    if (concentricCircleColourType > 0.5){
        concentricCircle(x,y,size,circleNumber + 1) //inverse
    }
    else {concentricCircle(x,y,size,circleNumber)}
}

//this is the most basic cross, no rotation
//no translation - "cross" will never be drawn
//its just a skeleton
function Cross (length, width,bevel){
  rectMode (CENTER);
  noStroke(0);
  fill (255);
  rect (0,0,length,width,bevel); //I want 0,0 hardcoded as this now has its own coordinate system
  rect (0,0,width,length,bevel);
}
//this is a basic cross, it draws the skeleton
//it can also accept x and y so it can translate the CROSS which is now its own object
function basicCross (x,y){
  const CROSS_WIDTH = 2
  const CROSS_LENGTH = CELL_SIZE - 7
  push ();
  translate(x + COLUMN_SIZE/2, y + ROW_SIZE /2)
  Cross(CROSS_LENGTH, CROSS_WIDTH); //this takes the basic skeleton
  pop ();
}

//
function thickCross(x,y,bevel){
  const CROSS_WIDTH = 4
  const CROSS_LENGTH = CELL_SIZE - 7
  push();
  translate(x + COLUMN_SIZE/2, y + ROW_SIZE /2);
  rotate(45);
  Cross(CROSS_LENGTH, CROSS_WIDTH,bevel);
  pop();
}

//function sqaure with circle
// function centered dot 
// pattern class 

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("#2A252C");
  noLoop();
  drawNoisePattern(0,0)
  concentricCircleColour(width/2, height/2, 20, 0)
}
