var bullet,wall,thickness
var speed,weight





function setup() {
  createCanvas(1600,400);
  speed=random(220,321)
  weight=random(30,52)
  thickness=random(22,83)

 bullet=createSprite(50, 200, 50, 5);

 bullet.velocityX=speed
 bullet.shapeColor="red"
 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor="black"
}

function draw() {
  background("white");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var dammage=0.5 * weight *speed *speed/(thickness*thickness*thickness)
    if(dammage>10){
      wall.shapeColor="yellow"
    }
    if(dammage<10){
      wall.shapeColor="orange"
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEndge=bullet.x+bullet+width
wallLeftEdge=wall.x
if(bulletRightEndge>=wallLeftEdge){
  return true
}
return false
}