const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2,polyGon,slingShot,backgroundImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
    block11,block12,block13,block14,block15,block16,block17,block18,block19,
    block20,block21,block22,block23,block24,block25;

function preload(){
  getBackground();
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,550,1200,50);
  stand1 = new Ground(550,290,250,20);
  stand2 = new Ground(910,200,200,20);

  //blocks for stand1
  block1 = new Box(460,275,30,40);
  block2 = new Box(490,275,30,40);
  block3 = new Box(520,275,30,40);
  block4 = new Box(550,275,30,40);
  block5 = new Box(580,275,30,40);
  block6 = new Box(610,275,30,40);
  block7 = new Box(640,275,30,40);
  block8 = new Box(490,235,30,40);
  block9 = new Box(520,235,30,40);
  block10 = new Box(550,235,30,40);
  block11 = new Box(580,235,30,40);
  block12 = new Box(610,235,30,40);
  block13 = new Box(520,195,30,40);
  block14 = new Box(550,195,30,40);
  block15 = new Box(580,195,30,40);
  block16 = new Box(550,155,30,40);

//blocks for stand2
block17 = new Box(970,185,30,40);
block18 = new Box(940,185,30,40);
block19 = new Box(910,185,30,40);
block20 = new Box(880,185,30,40);
block21 = new Box(850,185,30,40);
block22 = new Box(940,145,30,40);
block23 = new Box(910,145,30,40);
block24 = new Box(880,145,30,40);
block25 = new Box(910,104,30,40);

polyGon = new Polygon();

slingShot = new SlingShot(polyGon.body,{x:150,y:200})

}

function draw() {
  if(backgroundImg)
  background(backgroundImg); 

  Engine.update(engine);
  
  fill(196, 123, 254)
  ground.display();
  fill(212,23,134)
  stand1.display();
  stand2.display();
  fill(255, 203, 27)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(32, 218, 158)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("lightblue")
  block13.display();
  block14.display();
  block15.display();
  fill(32, 130, 255)
  block16.display();
  fill(32, 218, 158)
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("lightblue")
  block22.display();
  block23.display();
  block24.display();
  fill(32, 130, 255)
  block25.display();
  noFill();
  polyGon.display();
  
slingShot.display();
fill(32, 191, 255)
textSize(40)
text("Drag the rock to play this game",300,50)
fill(180, 200, 200)
textSize(20)
text("Press space to restart the game",900,510)

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polyGon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingShot.attach(polyGon.body);
    Matter.Body.setPosition(polyGon.body,{x:150,y:200})
  }
}

async function getBackground(){
  var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json()
  
  var dateTime = responsejson.datetime;
  
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour>6 && hour<18){
bg = "day.jpg"
  }
  else{
bg = "night.jpg"
  }
  backgroundImg= loadImage(bg)
}