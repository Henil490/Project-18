var BananasGroup,StonesGroup;
var score=0;
var gameState="end";


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}
function setup() {
  createCanvas(400, 400);
   backgr=createSprite(0,0,400,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(50,200);
  player.addAnimation("running",player_running );
  player.scale = 0.12;
  
  invisibleground=createSprite(50,250,800,10);
  invisibleground.visible=false;
  
   BananasGroup=createGroup();
   StonesGroup=createGroup();
}



function draw() {
  background(0);
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  
  
  if (player.isTouching(BananasGroup)){
    BananasGroup.destroyEach();
    score=score+2;
}
  
  if (player.isTouching(StonesGroup)){
    player.scale=0.12;
}
  
  
  
  if (keyDown("space")&& player.y >=200) {
  player.velocityY=-10;
    }
        
 player.velocityY = player.velocityY + 0.4 ;
 
  
   player.collide(invisibleground);
  
  switch(score){
    case 10: player.scale=0.13;
            break;
    case 20: player.scale=0.15;
            break;
    case 30: player.scale=0.17;
            break;
    case 40: player.scale=0.18;
            break;
        default:break;
        
  }
  
  
  
  drawSprites();
   textSize(25);
   fill("red");
  text("Score :"+score,250,50);
  Spawnbananas();
  Spawnstones();
}

function Spawnbananas(){
if (frameCount%80===0) {
  var banana = createSprite(350, 10);
  banana.addImage(bananaImage);
  banana.y=random(160,250); 
  banana.lifetime=134;
  banana.scale=0.05;
  banana.velocityX=-6;
  BananasGroup.add(banana);
    
  }
    
}

function Spawnstones() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(400,220);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    StonesGroup.add(obstacle);
    obstacle.scale=0.2;
  }
}