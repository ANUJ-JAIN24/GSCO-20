var car,wall;

var speed,weight;


function setup()
{
  createCanvas(800,400);

  speed=random(10,100);
  weight=random(400,1500);


    car=createSprite(50,200,50,50);
    car.velocityX=speed;
    car.shapeColor=color(255);


  wall=createSprite(700,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}


function draw()
{
  background(50);


  if(keyDown("space"))
  {
  car.x=50
  car.y=200
  speed=random(10,100);
  car.velocityX=speed;
  }

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
  
    if(deformation>180)
    {
    car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }

  text("deformation",500,500);
  text(Math.round(deformation),500,60);

  text("speed",500,70)
  text(Math.round(speed),500,80);

  text("weight",500,90)
  text(Math.round(weight),500,100);
  
}

drawSprites();
}










