var fir,mor;
function setup() {
  createCanvas(1200,800);
  fir=createSprite(400, 400, 150, 70);
 mor =createSprite(400,200,70,150);
 fir.shapeColor="blue";
 mor.shapeColor="blue";
 fir.velocityY=-3;
 mor.velocityY=3;
}

function draw() {
  background(255,255,255);  
 
  console.log(mor.x-fir.x)
  if(mor.x-fir.x<mor.width/2+fir.width/2&&fir.x-mor.x<mor.width/2+fir.width/2){
    mor.velocityX=mor.velocityX*(-1);
    fir.velocityX=fir.velocityX*(-1);
  }
if(mor.y-fir.y<mor.height/2+fir.height/2&&fir.y-mor.y<mor.height/2+fir.height/2){
    mor.velocityY=mor.velocityY*(-1);
    fir.velocityY=fir.velocityY*(-1);
  }
  drawSprites();
}   