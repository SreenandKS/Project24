
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	  paper = new Paper(75,680,70);
    dustbin = new Dustbin(900,670,150,150);
   
    ground = new Ground(0,685,2400,10);	
	Engine.run(engine);
  
}


function draw() {
  
  background("brown");
  
  paper.display();
  ground.display();
  dustbin.display();
  
  // keyPressed();

  drawSprites();
 

}


function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1200});
  }
}
