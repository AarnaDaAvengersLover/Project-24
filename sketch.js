const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var boxLine1,boxLine2,boxLine3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,50,50);

	boxLine1=createSprite(600,660,200,20);
	boxLine1.shapeColor=color(250,1,3);

	boxLine2=createSprite(500,600,20,140);
	boxLine2.shapeColor=color(250,1,3);

	boxLine3=createSprite(700,600,20,140);
	boxLine3.shapeColor=color(250,1,3);

	ground=createSprite(400,690,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();

  //paper.keyPressed();

  

  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x: 85,y:-85})
	}
  }

