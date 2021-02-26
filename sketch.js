
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,d1,d2,d3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(20,680,25);
    d1 = new Dustbin(800,680,150,10);
    d2 = new Dustbin(730,600,10,100);	
	  d3 = new Dustbin(870,600,10,100);
    ground = new Ground(0,685,2400,10);	
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  paper.display();
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-190});
  }
}
