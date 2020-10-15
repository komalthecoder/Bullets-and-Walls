var bullet, wall;
var speed, weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(100,300);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0);  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2) {

    bullet.velocityX = 0;

    if (damage < 100) {
      bullet.shapeColor = color(0,100,0);
    }

    if (damage < 180 & damage > 100) {
      bullet.shapeColor = color(200,0,0);
    }

    if (damage > 180) {
      bullet.shapeColor = color(0,0,50);
    }

  }

  if(hasCollided(bullet,wall)) {

    bullet.velocityX = 0;

    textSize(50);
    fill("yellow");
    text("BOOM!" , 600, 200);

    if(damage > 10) {

      wall.shapeColor = color(255,0,0);

    }

    if(damage < 10) {

      wall.shapeColor = color(0,255,0);


    }
  }

  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}