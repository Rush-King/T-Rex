var box;

function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,20)
  background("yellow");
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    background ("red");
  }
drawSprites();
}
