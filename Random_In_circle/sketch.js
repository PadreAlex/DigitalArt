
var points = []
var multipl = 0.008
var density = 40

var r1 
var r2
var g1
var g2
var b1
var b2
var nDet = 1

function setup() {
  createCanvas(720, 550);
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
  multipl = random(0.001, 0.01)
  density = random(10, 100)
  nDet = random(1, 100)
}

function draw() {
  noStroke()
  
  
  for (let i = 0; i < points.length; i++) {
    var r = map(points[i].x, 0, width, r1, r2)
    var g = map(points[i].y, 0, height, g1, g2)
    var b = map(points[i].x, 0, width, b1, b2)
    var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 250, 250, 0)
    fill(r, g, b, alpha)
    
    var angle = map(noise(points[i].x * multipl, points[i].y * multipl),     0 , 1, 0, 720)
  
    points[i].add(createVector(cos(angle), sin(angle)))
    
    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 250) {
       ellipse(points[i].x, points[i].y, 1) 
    }
  }
}

