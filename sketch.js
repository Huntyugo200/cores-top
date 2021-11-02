

var bola;

function setup(){
createCanvas(600,600);
bola=createSprite(300,300,30,30);


}

function draw(){
  background("yellow");

  if(keyIsDown(UP_ARROW)){
    bola.y=bola.y-5;
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    bola.y=bola.y+5;
    background("red");
  }
  if(keyIsDown(RIGHT_ARROW)){
    bola.x=bola.x+5;
    background("purple");
  }
  if(keyIsDown(LEFT_ARROW)){
    bola.x=bola.x-5;
    background("blue");
  }
drawSprites();
}