
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);

  monkey = createSprite(100,500,20,20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.25

  ground = createSprite(300,600,1200,50);
  
   

}


function draw() {
   background("white");
  
  monkey.collide(ground);

  monkey.velocityY = monkey.velocityY + 0.75;
  if (keyDown("space") && monkey.y >= 490){
    monkey.velocityY = -20
  }
  if (frameCount % 80 === 0) {
  createObstactles();  
  }
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  ground.velocityX = -4
 
  
  if (frameCount % 50 === 0 || frameCount  % 120 === 0) {
   createBannanas();
  }
  
  if (frameCount % 20 === 0) {
    score = score + 1
  }
  
  
  drawSprites();  

  text("Survival Time: " + score, 270,50);
}


function createObstactles() {
  var obstacle = createSprite(600,550,20,20);
  obstacle.velocityX = -8;
  obstacle.addImage("obstacles", obstacleImage);
  obstacle.scale = 0.25
}

function createBannanas() {
  var rand = Math.round(random(150,400))
  var bannana = createSprite(600,rand,20,20);
  bannana.velocityX = -4
  bannana.addImage(bananaImage);
  bannana.scale = 0.15
}

