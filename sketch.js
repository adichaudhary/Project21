var bullet, wall, thickness, speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);

  weight = random(30,52);

  bullet = createSprite(50, 200, 50, 50);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
  thickness = random(22,83)
}

function draw() {
  background(255,255,255);  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/thickness^3;

    if (deformation > 180){
      wall.shapeColor = color (255,0,0);
    }

    if (deformation<180){
      wall.shapeColor = color (0,255,0);
    }
  }
  drawSprites();
}