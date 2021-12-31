let outputScale = 5;
let currentScale;
let myScaledCanvas;
let canvas;
function setup() {
  canvas = createCanvas(600, 500);
  myScaledCanvas = createGraphics(600, 500);
  currentScale = 1; 
  myScaledCanvas.blendMode(SOFT_LIGHT)
}

function draw() {
  background(220);
  myScaledCanvas.clear();
  myScaledCanvas.push();
  myScaledCanvas.scale(currentScale);
  drawDesign();
  myScaledCanvas.pop();
  image(myScaledCanvas, 0, 0); // Show on the main canvas
  noLoop();
}
function exportHighResolution() {
  currentScale = outputScale; // High-Res Export
  myScaledCanvas = createGraphics(currentScale * 800, currentScale * 800);
  draw();
  save(myScaledCanvas, "highResImage", 'jpeg');
  currentScale = 1; // Reset to default scale 1:1
  myScaledCanvas = createGraphics(800, 800);
  // draw();
}
function keyReleased() { if (key == 'e') exportHighResolution(); }

function drawDesign() {
  // myScaledCanvas.background(220)
  myScaledCanvas.noStroke()
  for(let i = 0; i < 400; i++)
  {
    let X = randomGaussian(width/2, 300);
    let Y = randomGaussian(height/2, 120);
    let Z = randomGaussian(50, 25);
    if (i % 3 == 0 ) {
      myScaledCanvas.fill("#e6770b");
      myScaledCanvas.square(X, Y, Z);}
    else if(i % 3 == 1) {
      myScaledCanvas.fill("#52d053");
      myScaledCanvas.triangle(X, Y, X+Z, Y, X, Y-Z)
    }
    else {
      myScaledCanvas.fill("#765898");
      myScaledCanvas.square(X, Y, Z);}
  }
}
