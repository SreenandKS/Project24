class Dustbin {
    constructor(x, y,height,width) {
     
      this.body = Matter.Bodies.rectangle(x, y, height,width,{isSeaeic:true});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.height,this.width);
      
    }
  };
  