
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1000,900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	groundObj=new Ground(400,700,1000,20);
	left=new Ground(700,630,20,150);
	right=new Ground(450,630,20,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  left.display();
  right.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ){
	Matter.Body.applyForce(ball,ball.position,{x:51,y:-51});
}
	
}



