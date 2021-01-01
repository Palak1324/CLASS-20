var box1, box2; 

function setup() {
  createCanvas(800,400);

box1=createSprite(400,200,50,80);
box1.shapeColor="yellow"
box2=createSprite(400,200,80,25);
box2.shapeColor="red"
}

function draw() {
  background("black");  
  box2.x=World.mouseX;
  box2.y=World.mouseY;
if(box1.x-box2.x<box1.width/2+box2.width/2 && box2.x-box1.x<box2.width/2+box1.width/2 && 
  box1.y-box2.y<box1.height/2+box2.height/2 && box2.y-box1.y<box2.height/2+box1.height/2){
box2.shapeColor="yellow";
}  
else{
  box2.shapeColor="red";
}
  drawSprites();
}







