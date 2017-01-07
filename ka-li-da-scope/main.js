var diameter = 20
var centerX;
var centerY;
var numSlices = 8;
var numPositions = 20;

var positions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  centerX = width/2;
  centerY = height/2;

  fill(255);
  stroke(255);
}

function draw() {
  // Add the latest position to the array
  positions.unshift({ x: mouseX, y: mouseY });
  // Only store the latest `numPositions` positions
  positions.splice(numPositions, 100);

  translate(width/2, height/2);
  background(0);

  // For each slice
  for (var i = 0; i < numSlices; i++) {
    drawPoints(positions);
    rotate(360 / numSlices);
  }
}

function drawPoints(xs) {
  for (var i = xs.length - 1; i >= 0; i--) {
    var positions = xs[i];
    var x = positions.x;
    var y = positions.y;
    ellipse(x - centerX, y - centerY, diameter, diameter);
  }
}
