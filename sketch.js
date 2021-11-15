var jaxon; var ground; var invisBound1; var invisBound2;
var jaxon_movement; var ground_img





function preload(){
  //pre-load images
  jaxon_movement=loadAnimation("Runner-1.png", "Runner-2.png")
  ground_img=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground = createSprite(200, 200, 10, 10)
  ground.addImage(ground_img)
  ground.velocityY = 5

  invisBound1 = createSprite(340, 350, 10, 700)
  invisBound2 = createSprite(65, 350, 10, 700)

  jaxon = createSprite(200, 350, 10, 10)
  jaxon.addAnimation("yay", jaxon_movement);
  jaxon.scale= 0.06



  

}

function draw() {
  background("black");

  if (ground.y>400) {
    ground.y=200
  }

jaxon.x=World.mouseX



invisBound1.visible = false
invisBound2.visible = false


jaxon.collide(invisBound1)
jaxon.collide(invisBound2)


  drawSprites();

}
