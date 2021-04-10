class Box {
    constructor(x, y, width, height) {
      var option = {
          restitution:0.8,
          friction:1,
          density:1
         
      }
      this.body = Bodies.rectangle(x, y, width, height, option);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.Visiblity=255
    }
    display(){
      var pos =this.body.position;
     var angle =this.body.angle;

     if(this.body.speed<13){
      
      push();
      translate(pos.x,pos.y);
      rotate(angle);
       rectMode(CENTER);
       strokeWeight(2);
       stroke(0)
       rect(0, 0, this.width, this.height);
       pop();
     }
     else{
      World.remove(world,this.body)
     push();
     this.Visiblity=this.Visiblity-5;
     
    
     pop();
    
     }
    }
  }
  