var ball1,ball2;

function setup(){
    createCanvas(1200,800);
  ball1 = createSprite(300,500,60,120);
  ball1.shapeColor="red";

  ball2 = createSprite(160,100,60,80);
  ball2.shapeColor="red";
  
}

function draw(){
    background(0)
    

    ball2.y = World.mouseY
    ball2.x = World.mouseX

    if(  ball1.x - ball2.x  < ball1.width/2  + ball2.width/2      
        &&  ball2.x - ball1.x  < ball1.width/2  + ball2.width/2      
        &&  ball1.y - ball2.y  < ball1.height/2  + ball2.height/2      
        &&  ball2.y - ball1.y  < ball1.height/2  + ball2.height/2             ) {

        ball1.shapeColor="green"
        ball2.shapeColor="green"
   }
else{
    ball2.shapeColor="red"
    ball1.shapeColor="red"
}




drawSprites();    
}

