// Variables and Constants:
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var holder, constraint1, constraint2, constraint3, constraint4, constraint5;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	holder = createSprite(370,50,600,50);
	holder.shapeColor = color(255);

	bob1 = new Bob(120,600);
	bob2 = new Bob(230,600);
	bob3 = new Bob(340,600);
	bob4 = new Bob(450,600);
	bob5 = new Bob(560,600);

	constraint1 = new Rope(bob1.body,{x: 120, y: 50});
	constraint2 = new Rope(bob2.body,{x: 230, y: 50});
	constraint3 = new Rope(bob3.body,{x: 340, y: 50});
	constraint4 = new Rope(bob4.body,{x: 450, y: 50});
	constraint5 = new Rope(bob5.body,{x: 560, y: 50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  drawSprites();
 
}

function mouseDragged () {
	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}

function mouseReleased () {
	mouseDragged = false;
}