class Polygon {
constructor(){
    var options={
        friction:1.0,
        restitution:0.5,
        density:1.5
    }
    
this.body = Bodies.circle(150,200,25,options);
this.image = loadImage("rock.png")
World.add(world,this.body);
    
}
display(){
    var pos = this.body.position
    var angle = this.body.angle;
    

    push();
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER);
image(this.image,0,0,100,100);
pop();
}
}