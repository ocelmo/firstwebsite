/*global createCanvas, background, rect, fill, noStroke, width, stroke, strokeWeight, line,
ellipse, keyCode, keyIsPressed, LEFT_ARROW, RIGHT_ARROW, mouseX, UP_ARROW,
mouseY, random, text, textSize, frameRate, mouseIsPressed,*/

var GameOn, lives, score, yPosRed;
var line1x, line1y, line1length;
var line2x, line2y, line2length;
var decreaselengthline1, decreaselengthline2;

function setup() {
  createCanvas(400, 400);
  frameRate(75);
  background(255, 242, 179);
  GameOn = true;
  lives = 3;
  score = 0;
  yPosRed = 200;

  line1x = 440;
  line1y = random(100, 350);
  line1length = random(20, 320);

  line2x = 640;
  line2y = (100, 350);
  line2length = random(20, 320);

  decreaselengthline1 = 1;
  decreaselengthline2 = 1;
}
function draw() {
  if (GameOn == true) {
    background(255, 242, 179);
    noStroke();
    fill(255, 186, 0);

    if (lives == 3) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
      ellipse(30, 110, 30);
    } else if (lives == 2) {
      ellipse(30, 30, 30);
      ellipse(30, 70, 30);
    } else if (lives == 1) {
      ellipse(30, 30, 30);
    } else {
      GameOn = false;
    }
    rect(180, 15, 200, 60, 60);
    fill(0);
    textSize(32);
    text("Score: " + score, 220, 55);

    fill(255, 0, 0);
    ellipse(100, yPosRed, 30, 30);

    if (keyIsPressed && keyCode == UP_ARROW) {
      yPosRed -= 10;
    } else {
      yPosRed += 10;
    }

    if (yPosRed >= 385) {
      yPosRed = 385;
    }
    if (yPosRed <= 15) {
      yPosRed = 15;
    }

    stroke(0);
    strokeWeight(4);
    line(line1x, line1y, line1x + line1length, line1y);
    line(line2x, line2y, line2x + line2length, line2y);

    line1x = line1x - decreaselengthline1;
    line2x = line2x - decreaselengthline2;

    if (line1x < 0 - line1length) {
      line1x = 400;
      line1y = random(50, 350);
      line1length = random(20, 320);
      decreaselengthline1 += 0.5;
      lives--;
    }

    if (line2x < 0 - line2length) {
      line2x = 400;
      line2y = random(100, 350);
      line2length = random(20, 320);
      decreaselengthline2 += 0.5;
      lives--;
    }
    if (line1y < yPosRed + 15 && line1y > yPosRed - 15) {
      if (line1x < 115 && line1x + line1length > 85) {
        line1x = 400;
        score++;
        line1y = random(100, 350);
        line1length = random(20, 320);
        decreaselengthline1 += 0.5;
      }
    }
    if (line2y < yPosRed + 15 && line2y > yPosRed - 15) {
      if (line2x < 115 && line2x + line2length > 85) {
        line2x = 400;
        score++;
        line2y = random(100, 350);
        line2length = random(20, 320);
        decreaselengthline2 += 0.5;
      }
    }
  } else {
    background(255, 242, 179);
    noStroke();
    fill(255, 186, 0);
    rect(50, 100, 300, 200, 60);
    fill(255, 242, 179);
    rect(70, 120, 260, 56, 60);
    rect(70, 200, 260, 75, 60);

    fill(0);
    textSize(30);
    text("Score: " + score, 140, 159);
    text("Restart", 150, 245);

    if (mouseIsPressed) {
      if (mouseX > 70 && mouseX < 330 && mouseY > 200 && mouseY < 275) {
        GameOn = true;
        lives = 3;
        score = 0;
        yPosRed = 200;

        line1x = 440;
        line1y = random(100, 350);
        line1length = random(20, 320);

        line2x = 640;
        line2y = (100, 350);
        line2length = random(20, 320);

        decreaselengthline1 = 1;
        decreaselengthline2 = 1;
      }
    }
  }
}
