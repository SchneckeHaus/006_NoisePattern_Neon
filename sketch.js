//Global Variables Set Up
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 800
const CELL_SIZE = 20
const ROW_AMOUNT = CANVAS_HEIGHT/20
const COLUMN_AMOUNT = CANVAS_WIDTH/20
const NOISE_SCALE = 0.005

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
            
            // dev principle - build the simplest thing that works 
        }
        else {
            fill(255);
            rect(x, y, CELL_SIZE, CELL_SIZE);
            
        }
        
      }
    }
}
// function concentric circle patter
//function cross pattern 1
//function cross pattern 2
//function sqaure with circle
// function centered dot 
// pattern class 



function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noLoop();
}

function draw() {
  background("#2A252C");
  noLoop();
  drawNoisePattern(0,0)
}
