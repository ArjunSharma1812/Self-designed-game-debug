var map, boy1Img, boy2Img, boy1LeftImg;
var foundSnd, countSnd;
var tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8;
var rock1, rock2, rock3, rock4, rock5, rock6, rock7;
var vent1, vent2, vent3, vent4, vent5, vent6;
var house;
var player, computer;
var gameState = 1;

function preload(){
  map = loadImage("./assets/map.png");
  boy1Img = loadImage("./assets/boy1.png");
  boy2Img = loadImage("./assets/boy2.png")
  foundSnd = loadSound("./assets/found.mp3");
  countSnd = loadSound("./assets/counting.mp3");
  boy1LeftImg = loadImage("./assets/boy1left.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  tree1 = createSprite(400, 250, 50, 100);
  tree1.visible = false;
  tree2 = createSprite(450, 680, 50, 80);
  tree2.visible = false;
  tree3 = createSprite(730, 620, 50, 100);
  tree3.visible = false;
  tree4 = createSprite(980, 510, 50, 100);
  tree4.visible = false;
  tree5 = createSprite(1170, 825, 50, 65);
  tree5.visible = false;
  tree6 = createSprite(1585, 825, 50, 80);
  tree6.visible = false;
  tree7 = createSprite(1650, 265, 50, 100);
  tree7.visible = false;
  tree8 = createSprite(1380, 240, 50, 80);
  tree8.visible = false;
  rock1 = createSprite(200, 330, 220, 120);
  rock1.visible = false;
  rock2 = createSprite(370, 460, 200, 100);
  rock2.visible = false;
  rock3 = createSprite(160, 830, 150, 100);
  rock3.visible = false;
  rock4 = createSprite(800, 750, 370, 200);
  rock4.visible = false;
  rock5 = createSprite(1140, 600, 120, 100);
  rock5.visible = false;
  rock6 = createSprite(1700, 380, 150, 100);
  rock6.visible = false;
  rock7 = createSprite(950, 200, 150, 100);
  rock7.visible = false;
  vent1 = createSprite(160, 635, 200, 100);
  vent1.visible = false;
  vent2 = createSprite(640, 380, 150, 50);
  vent2.visible = false;
  vent3 = createSprite(1360, 400, 200, 100);
  vent3.visible = false;
  vent4 = createSprite(1130, 100, 300, 110);
  vent4.visible = false;
  vent5 = createSprite(1030, 900, 200, 110);
  vent5.visible = false;
  vent6 = createSprite(1765, 800, 150, 100); 
  vent6.visible = false;  
  player = createSprite(1780, 620, 30, 30);
  player.addImage("boy1",boy1Img); 
  player.addImage("boy1left", boy1LeftImg);
  player.scale = 0.7;
  computer = createSprite(1780, 400, 10, 10);
  computer.addImage("boy2",boy2Img);
  computer.scale = 0.7;
  house = createSprite(1700, 500, 250, 80);
  house.visible =false;
}


function draw() {
  background(map);  
  if(gameState === 1 && (!countSnd.isPlaying())){
    countSnd.play();
    randomNum = Math.round(random(1, 21));  
    setTimeout(()=>{
      gameState = 2;
    }, 6000)
  }
  if(gameState === 2){
    if(keyDown(LEFT)){
      player.x = player.x-10
      player.changeImage("boy1left");
    }
    if(keyDown(RIGHT)){
      player.x = player.x+10
      player.changeImage("boy1");
    }
    if(keyDown(UP_ARROW)){
      player.y = player.y-10;
    }   
    if(keyDown(DOWN_ARROW)){
      player.y = player.y+10;
    }
    player.collide(house);
    player.collide(tree1);
    player.collide(tree2);
    player.collide(tree3);
    player.collide(tree4);
    player.collide(tree5);
    player.collide(tree6);
    player.collide(tree7);
    player.collide(tree8);
    player.collide(rock1);
    player.collide(rock2);
    player.collide(rock3);
    player.collide(rock4);
    player.collide(rock5);
    player.collide(rock6);
    player.collide(rock7);
    player.collide(vent1);
    player.collide(vent2);
    player.collide(vent3);
    player.collide(vent4);
    player.collide(vent5);
    player.collide(vent6);  
  }

//console.log(gameState);
  
  drawSprites();
}