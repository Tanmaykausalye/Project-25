const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3
var ground
var paper
var bulb1

function preload()
{
	bulb1 = loadImage("bulb.jpg")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  paper = new Paper()
	dustbin1 = new Dustbin(500,550,150,15)
  //dustbin2 = new Dustbin(410,400,15,100)  	
//	dustbin3 = new Dustbin(590,400,15,1000)	 
	ground = new Ground()
  bulb = createSprite(450,20,20,20)
  bulb.addImage("bulb1",bulb1)
  bulb.scale = 0.3

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  drawSprites();
 
}

function keyPressed (){

if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:1.5,y:-5})

}
}
