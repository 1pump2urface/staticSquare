var movingBlock, fixedBlock
function setup() {
  createCanvas(800,400);
  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(600,200,50,90);
  movingBlock.shapeColor = "blue";
  fixedBlock.shapeColor = "blue";
  movingBlock.velocityX = 4;
  fixedBlock.velocityX = -4;

}

function draw() {
  background(0,0,0);  
  //movingBlock.x = World.mouseX;
  //movingBlock.y = World.mouseY;
  if (isTouching(movingBlock , fixedBlock)){
    fixedBlock.shapeColor = "red";
    movingBlock.shapeColor = "blue";
  }
  else{
    movingBlock.shapeColor = "blue";
    fixedBlock.shapeColor = "blue";
  }
bounceOff(movingBlock , fixedBlock);
  drawSprites();
}
