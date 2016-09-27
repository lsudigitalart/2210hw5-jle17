var s = 0;  //scale
var r = 150; //radius

function setup(){
  createCanvas(800, 500);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);



}

function draw(){

      for(var x = 0; x < width; x += 10){
        stroke(255);
        line(x, 0, x, height);
      }


      fill(0);
      rect (width/4, height/2, 300, 300);

      push();
      if (s < 1){
        s = s+0.01;
        scale(s);
      } else{
        s = .01*s;
        scale(s);
      }
      ellipse((3*width)/4, height/2, 2*r);
      pop();


      for(var y = 100; y < 400; y += 10){
        stroke(255);
        line(50, y, 350, y);
      }

      // for(var circleY = 100; circleY < 400; y += 10){
      //   stroke(155);
      //   line((-1)*sqrt((r*r)-(circleY*circleY))+600,
      //   circleY,
      //   sqrt((r*r)-(circleY*circleY))+600,
      //   circleY);
      // }









}
