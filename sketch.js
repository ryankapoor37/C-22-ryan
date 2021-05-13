var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)

 car=createSprite(50, 200, 50, 50);

car.velocityX = 5;


wall=createSprite(1500,200,60,height/2)








}

function draw() {
  background("black");  
 
 
 { if(wall.x-car.x < (car.width+wall.widht)/2
 
  { car.velocityX=0;
    vardeformation=0.5 * weight * speed * speed/22509;  
    if(deformation>180)
    { 
      car.shapeColor=color("yellow");
      wall.shapecolor=color("white");

    }
    if(deformation<180 && deformation>100)

    {
      car.shapecolor=color("green")
      wall.shapecolor=color("white")
    }
if(deformation<100)
    
    {

 
 
    }

 
  drawSprites();  
  }