var drawing = [];
var canvas;
var currentPath = [];
function setup() {
 canvas =  createCanvas(800,400);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
}
function startPath() {
  currentPath = [];
}
function endPath() {
  drawing.push(currentPath);
}
function draw() {
  background(255,255,255);  
  if(mouseIsPressed) {
    var point = {
      x: mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  //beginShape();
  
  stroke(0,0,0);
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length;i++) {
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < drawing.length;j++) {
      vertex(path[j].x, path[j].y);
    }

    endShape(); 
}

  drawSprites();
}