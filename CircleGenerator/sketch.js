
let gap = 10
let circNum = 40
let circSize = 20
let angle
var r1 
var r2
var g1
var g2
var b1
var b2
function setup() {
  createCanvas(700, 500);
  angleMode(DEGREES)
  
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
}

function draw() {
  background(0);
  push()
  translate(width / 2, height / 2)
  angle = map(random(height), 0, random(width), 0, -360, 360)
  rotate(angle)
  noFill()
  strokeWeight(1)
  for (let i = 0; i < circNum; i++) {
    var r = map(circSize + gap * i, 0, width, r1, r2)
    var g = map(circSize + gap * i, 0, height, g1, g2)
    var b = map(circSize + gap * i, 0, width, b1, b2)
    stroke(r, g, b)
    arc(0, 0, circSize + gap * i, circSize + gap * i, angle * random(3000), 360 - random(2000) )
  }

  pop()
  
  noLoop()
}

function mousePressed() {
  // clear();
  redraw(10);
}
