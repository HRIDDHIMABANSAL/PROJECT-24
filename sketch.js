
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

    


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,200,20);
	ground = new Ground(600,600,1200,20);
	box1 = new Box(900,580,200,20);
	box2 = new Box(790,540,20,100);
	box3 = new Box(1010,540,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  drawSprites();
 
}          


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-17});
	}
}



