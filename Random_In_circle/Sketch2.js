//Updated version, maybe bit buggy but do what i whant
var points = []
var multipl = 0.008
var density = 50

var r1 
var r2
var g1
var g2
var b1
var b2
var nDet = 10

function setup() {
  // blendMode(OVERLAY)
  var width = windowWidth
  var height = windowHeight
  createCanvas(width, height);
  background(0);
  angleMode(DEGREES)
  noiseDetail(nDet)

  var space = width / density

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      var vector = createVector(x + random(-50, 50), y + random(-50, 50))
      points.push(vector)
    }
  }

  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
  multipl = random(0.0001, 0.01)
  density = random(10, 100)
  nDet = random(1, 10)
}
function draw() {
  firstLayer()
  
  secondLayer()
  secondLayer()
  secondLayer()
  secondLayer()
  // noLoop()
}

function firstLayer() {
  noStroke()

  for (let i = 0; i < points.length; i++) {
    // multipl = random(0.0001, 0.1)
    let r = map(points[i].x, 0, width, r1, r2)
    let g = map(points[i].y, 0, height, g1, g2)
    let b = map(points[i].x, 0, width, b1, b2)
    let alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 250, 250, 0)
    fill(r, g, b, alpha)
    // fill(255)

    let angle = map(noise(points[i].x * multipl, points[i].y * multipl), 0 , 1, 0, 720)

    // points[i].add(createVector(cos(angle), sin(angle)))
    points[i].add(createVector(sin(angle), cos(angle)))

    ellipse(points[i].x, points[i].y, 1) 
  }
}

function secondLayer() {
  noStroke()
  var points2 = points
  for (let i = 0; i < points2.length; i++) {
    // multipl = random(0.0001, 0.1)
    let r = random(r1,r2)
    let g = random(g1,g2)
    let b = random(b1,b2)
    // let alpha = map(0, 0, 10, 2, 10)
    let alpha = random(2, 10)
    fill(r,g,b, alpha)
    // fill(255)

    let angle = map(noise(points2[i].x * multipl, points2[i].y * multipl), 0 , 1, 0, 720)

    // points[i].add(createVector(cos(angle), sin(angle)))
    points2[i].add(createVector(sin(angle + i), cos(angle - i)))

    ellipse(points2[i].x, points2[i].y, 1) 
  }
}

function mouseClicked() {

  r1 = 233
  r2 = 233
  g1 = 23
  g2 = 23
  b1 = 23
  b2 = 23
}

// function keyPressed() {
//   if (keyCode === 83) { // if "s" is pressed
//     saveForPrint("sketch.jpg", "A3", 300);
//   }
// }
