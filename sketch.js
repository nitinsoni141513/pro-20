var wall , thickness;
var bullet, speed , weight;

function setup() {
  createCanvas(1600,400);
  
  var bullet = createSprite(200, 200, 50, 5);
  
  var wall = createSprite(1200,200,thickness,height/2)
 
  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
  
  drawSprites();
}