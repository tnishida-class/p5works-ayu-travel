// 最終課題を制作しよう


let cx, cy, vx, vy, maxR;
let white = (255);
let cream = (242, 212, 147);

function setup(){
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(3);

  cx = windowWidth / 2;
  cy = windowHeight / 2;
  maxR = min(windowWidth, windowHeight);
  angle = 0;

}


function draw(){
  background(160, 192, 255);
  drawArcs(white, cream, maxR * 0.8, angle);

  if (mouseIsPressed){
    angle += 1 / 6;
  }else{
    angle += 0;
  }
}


function drawArcs(c1, c2, r, angle){
  for (let i = 0; i < 10; i++) {
    let start = TWO_PI / 10 * i + angle;
    let stop = TWO_PI / 10 * (i + 1) + angle;
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
 }
 fill(255, 0, 0);
 triangle(100, 200, 150, 150, 195, 250);

 fill(0);
 textSize(25);
 text("やるの？やらないの？悩んだ時に押してみて！", 0, 50);
 fill(0);
 textSize(19);
 text("白色：やる！　灰色：やらない（マウスをクリックでスタート、離してストップ）",0, 75);
}
