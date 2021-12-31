
// let gap = 10
// let circNum = 40
// let circSize = 20
let angle
var r1 
var r2
var g1
var g2
var b1
var b2
var arr = []
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
  drawFirst()
  noLoop()
}
function drawFirst() {
  let gap = random(7, 20)
  let circNum = random(30, 50)
  let circSize = 30
  push()
  translate(width / 2 + 100, height / 2 - 40)
  angle = map(random(height), 0, random(width), 0, -360, 360)
  rotate(angle)
  noFill()
  strokeWeight(1)
  for (let i = 0; i < circNum; i++) {
    let r = map(circSize + gap * i, 0, width, r1, r2)
    let g = map(circSize + gap * i, 0, height, g1, g2)
    let b = map(circSize + gap * i, 0, width, b1, b2)
    // var alpha = map(circSize + gap * i - 300, 0, 255, 255, 50)
    stroke(r, g, b, random(50, 255))
    arc(0, 0, circSize + gap * i, circSize + gap * i, angle * random(3000), 360 - random(2000) )
  }
  pop()
}

// function drawSecond() {
//    let gap = random(7, 10)
//   let circNum = random(20, 40)
//   let circSize = random(10, 20)
//   r1 = random(255)
//   r2 = random(255)
//   g1 = random(255)
//   g2 = random(255)
//   b1 = random(255)
//   b2 = random(255)
//   push()
//   translate(width / 2 - 100, height / 2 + 40)
//   angle = map(random(height), 0, random(width), 0, -360, 360)
//   rotate(angle)
//   noFill()
//   strokeWeight(1)
//   for (let i = 0; i < circNum; i++) {
//     let r = map(circSize + gap * i, 0, width, r1, r2)
//     let g = map(circSize + gap * i, 0, height, g1, g2)
//     let b = map(circSize + gap * i, 0, width, b1, b2)
//     stroke(r, g, b)
//     arc(0, 0, circSize + gap * i, circSize + gap * i, angle * random(3000), 360 - random(2000) )
//   }

//   pop()
//   noLoop()
// }
function exportHighResolution() {
  saveCanvas('myCanvas', 'jpg')
}
function keyReleased() { if (key == 'e') exportHighResolution(); }

function mousePressed() {
  // clear();
  redraw(20);
}
