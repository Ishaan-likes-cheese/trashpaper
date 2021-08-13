
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, left , right, top
var wall1, wall1
var ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	isStatic: false,
	restitution : 0.3,
    friction : 0,
	density : 1.2
}

ball = Bodies.circle(world,200,100,10, ball_options)

    ground = new Ground(100,200,400,20);
    right = new Ground(150,250,20,400);
    left = new Ground(200,300,20,400);
    bottom = new Ground(250,350,400,20);
    wall1 = new Ground(300,400,20,30);
    wall2 = new Ground(350,450,20,30);
    
rectMode(CENTER);
ellipseMode(Radius);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  wall1.show();
  wall2.show();
  ground.show();
  left.show();
  right.show();
  top.show();
  ellipse(ball.positions.x,ball.positions.y,20);
  
  drawSprites();
  display();
}



