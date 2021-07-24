var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 40, 100);
  movingRect=createSprite(650,200,100,40);

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

}

function draw() {
  //rgb -> red, green, blue; 0-255 0-blavck , 255-white
  background(0,0,0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  
  

  //collision
  if(movingRect.x-fixedRect.x<=   movingRect.width/2+ fixedRect.width/2 &&
    
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    
    fixedRect.y- movingRect.y<= movingRect.height/2+fixedRect.height/2
    ){

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";    


  }
else{
  fixedRect.shapeColor="green";
movingRect.shapeColor="green";
}






  drawSprites();
}