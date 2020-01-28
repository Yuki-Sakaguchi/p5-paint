function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
  // background(255) //背景の色
  frameRate(30)
  colorMode(HSB, 360, 100, 100)
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed () {
  push();
  translate(mouseX, mouseY);
  let hue = random(360); //colormodeに当たる
  fill(hue, 100, 100); //上記と同様
  noStroke();
  let dropNum = parseInt(map(random(1), 0, 1, 700, 1000)); //ペイントの大きさ
  for(let i = 0; i < dropNum; i++) {
    let diameter = pow(random(1), 20);
    let distance = sq((1.0 - pow(diameter, 2)) * random(1));
    let scaledDiameter = map(diameter, 0, 1, 1, 30);
    let scaledDistance = map(distance, 0, 1, 0, 300);
    let radian = random(TWO_PI);
    ellipse(scaledDistance * cos(radian), scaledDistance * sin(radian), scaledDiameter, scaledDiameter);
  }
  pop();
}
