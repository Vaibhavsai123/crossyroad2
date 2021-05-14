var grid = 50;
var width = 1366;
var CarGroup1,LogGroup1;
var grassHeight = 100;
var gameState = "play";
var CarAnimation, LogAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  LogGroup1 = new Group();
  
  // Grasses where player can rest
  
   for(var i=0;i<6;i++){
  var bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);

  if(i%2===0)//adding road
  {
     var road=createSprite(683,height-150-(i*400)-grassHeight,width,300);
     road.shapeColor="black";
  }
      bottomGrass1.shapeColor="green";
   }

   //To create a rows of car
   for(var i=0;i<40;i++){
   car=new Car (2);
   CarGroup1.add(car.spt);
   }
   
   //To create a rows of logs
   for(var i=0;i<40;i++){
    log =new Log(-3);
    LogGroup1.add(log.spt);
   }
   //create a player
   player=new player(width/2,height-75)
   

 }

function draw() {
  background("skyblue");

  // move the screen to location of player.
   translate(0,-player.spt.y+height-150);
 
 //Making cars re-apper
  for(i=1;i<CarGroup1.length;i++){
   if (CarGroup1[i].x>width){
     CarGroup1[i].x=0;
   }
   if(CarGroup1[i].x<0){
     CarGroup1[i].x=width;
   }
   
   //Making logs re-apper
   for(i=1;i<LogGroup1.length;i++){
    if (LogGroup1[i].x>0){
      LogGroup1[i].x=width;
    }
   
   }

  }




  drawSprites();
}

function keyPressed(){
    if(keyDown== UP_ARROW){
      player.move(0,-2);

   }

   else if (keyDown==DOWN_ARROW){
      player.move(0,2);
   }
   else if (keyDown==DOWN_ARROW){
       player.move(-2,0);
   }

   else if (keyDown==DOWN_ARROW){
     player.move(2,0);

   }
}








