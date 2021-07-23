var h, m, s;
var hangle, mangle, sangle;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(250, 250);
  rotate(-90);
  h = hour();
  m = minute();
  s = second();
  sangle = map(s, 0, 60, 0, 360);
  mangle = map(m, 0, 60, 0, 360);
  hangle = map(h % 12, 0, 12, 0, 360);
  push();
  stroke("green");
  rotate(mangle);
  strokeWeight(5);
  line(0, 0, 165, 0);
  pop();
  push();
  stroke("orange");
  strokeWeight(5);
  rotate(sangle);
  line(0, 0, 135, 0);
  pop();
  push();
  stroke("purple");
  strokeWeight(5);
  rotate(hangle);
  line(0, 0, 100, 0);
  pop();

  src = 0;
  strokeWeight(5)
  stroke ("green")
  noFill()
  ellipse (0,0,325,325)
  

  drawSprites();
}
