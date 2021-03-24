
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,rope,bob1,bob2,bob3,bob4,bob5,rope2,rope3,rope4,rope5;
function preload(){

	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (200,75,300,25);
	bob1 = new Bob (200,325);
	bob2 = new Bob (150,325);
	bob3 = new Bob (100,325);
	bob4 = new Bob (250,325);
	bob5 = new Bob (300,325);
	rope = new Chain (ground.body,bob1.body);
	rope2 = new Chain (ground.body,bob2.body);
	rope3 = new Chain (ground.body,bob3.body);
	rope4 = new Chain (ground.body,bob4.body);
	rope5 = new Chain (ground.body,bob5.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



