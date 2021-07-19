var path,pathimage;
var boy,boyimage;
var leftboundary,rightboundary;
function preload(){
  //pre-load images
  pathimage=loadImage("path.png")
  boyimage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathimage)
  path.velocityY=4
  path.scale=1.2

  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boyimage)
  boy.scale=0.08
 leftboundary=createSprite(0,0,100,800) 
 leftboundary.visible=false
 rightboundary=createSprite(400,0,100,800)
 rightboundary.visible=false

}

function draw() {
  background(0);
  path.velocityY=4
  boy.x=World.mouseX
  edges=createEdgeSprites()
    boy.collide(edges)
  if (path.y>400){
    path.y=height/2
  
  }
drawSprites()
}
