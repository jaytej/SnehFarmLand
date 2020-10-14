//Human and barrel variables
var human;
var tbarrelimg, cbarrelimg, gbarrelimg, pbarrelimg, bbarrelimg;

//Barrel and seed variables
var tomato_barrel;
var tomatoseedimg;
var pea_barrel;
var peaseedimg;
var grape_barrel;
var grapeseedimg;
var banana_barrel;
var bananaseedimg;
var carrot_barrel;
var carrotseedimg;

//LAND variables
var farmland1;
var farmland2;
var farmland3;
var farmland4;
var farmland5;
var farmland6;
var farmland7;
var farmland8;

//LAND image variables
var farmlandimg;

//Hand variable
var hand = "Empty";

//Land image (Fully Grown, and Seed)
var tfarmlandimg, tsfarmlandimg;
var cfarmlandimg, csfarmlandimg;
var gfarmlandimg, gsfarmlandimg;
var bfarmlandimg, bsfarmlandimg;
var pfarmlandimg, psfarmlandimg;

//Watering Can variables
var canimg;
var can;

//Human Image
var humanimg;

//Trash can variables
var trashCan;
var trashCanimg;

//Score, Trashed Plants, and Harvested Plants variables
var score = 0;
var trashed_plants = 0;
var harvested = 0;

//Market variables
var market;
var marketimg;

//Crow variables
var crowimg;

//Hand box images
var handbox;
var handimg;

//BELOW IS ALL THE HAND BOX IMAGES
var tomatoSeedHandimg;
var carrotSeedHandimg;
var grapeSeedHandimg;
var peaSeedHandimg;
var bananaSeedHandimg;
var canHandimg;

var tomatoHandimg;
var carrotHandimg;
var grapeHandimg;
var peaHandimg;
var bananaHandimg;

//Counter variables for seed -> fully grown
var tfarm1Counter = 20;
var tfarm2Counter = 20;

var pfarm1Counter = 22;
var pfarm2Counter = 22;

var gfarm1Counter = 25;
var gfarm2Counter = 25;

var cfarm1Counter = 27;
var cfarm2Counter = 27;

var bfarm1Counter = 30;
var bfarm2Counter = 30;

//Dead plant images
var deadplantimg;
var deadplantlandimg;

//Harvest gamestate variable
var tfarm1HARVEST = "no";
var tfarm2HARVEST = "no";

var pfarm1HARVEST = "no";
var pfarm2HARVEST = "no";

var gfarm1HARVEST = "no";
var gfarm2HARVEST = "no";

var bfarm1HARVEST = "no";
var bfarm2HARVEST = "no";

var cfarm1HARVEST = "no";
var cfarm2HARVEST = "no";

//counter for fully grown -> Dead
var tfarm1deadcounter = 15;
var tfarm2deadcounter = 15;

var pfarm1deadcounter = 15;
var pfarm2deadcounter = 15;

var gfarm1deadcounter = 15;
var gfarm2deadcounter = 15;

var cfarm1deadcounter = 15;
var cfarm2deadcounter = 15;

var bfarm1deadcounter = 15;
var bfarm2deadcounter = 15;

//Water land images
var grapeWater;
var tomatoWater;
var peaWater;
var bananaWater;
var carrotWater;

//counter for seed -> water
var tfarm1watercounter = 7;
var tfarm2watercounter = 7;

var pfarm1watercounter = 8;
var pfarm2watercounter = 8;

var bfarm1watercounter = 12;
var bfarm2watercounter = 12;

var cfarm1watercounter = 10;
var cfarm2watercounter = 10;

var gfarm1watercounter = 9;
var gfarm2watercounter = 9;

//counter for water -> dead
var tfarm1waterdeadcounter = 7;
var tfarm2waterdeadcounter = 7;

var pfarm1waterdeadcounter = 8;
var pfarm2waterdeadcounter = 8;

var gfarm1waterdeadcounter = 9;
var gfarm2waterdeadcounter = 9;

var cfarm1waterdeadcounter = 10;
var cfarm2waterdeadcounter = 10;

var bfarm1waterdeadcounter = 12;
var bfarm2waterdeadcounter = 12;

var playimg;
var rushimg;
var playBut;
var rush;

var gameState = "home";

var mainCounter = 300;

var game_number = 0;
var tfarm1 = 0;
var tfarm2 = 0;
var pfarm1 = 0;
var pfarm2 = 0;
var gfarm1 = 0;
var gfarm2 = 0;
var cfarm1 = 0;
var cfarm2 = 0;
var bfarm1 = 0;
var bfarm2 = 0;

var tfarm1dead = 0;
var tfarm2dead = 0;
var pfarm1dead = 0;
var pfarm2dead = 0;
var gfarm1dead = 0;
var gfarm2dead = 0;
var cfarm1dead = 0;
var cfarm2dead = 0;
var bfarm1dead = 0;
var bfarm2dead = 0;

var tfarm1water = 0;
var tfarm2water = 0;
var pfarm1water = 0;
var pfarm2water = 0;
var gfarm1water = 0;
var gfarm2water = 0;
var cfarm1water = 0;
var cfarm2water = 0;
var bfarm1water = 0;
var bfarm2water = 0;

var edges;

var control;
var controlimg;

var controls;
var controlsimg;

var gameMusic;
var menuMusic;





function preload() {

  //Seed Images
  humanimg = loadImage("images/Human.png");
  tomatoseedimg = loadImage("images/TomatoSeed.png");
  peaseedimg = loadImage("images/GrapeSeed.png");
  carrotseedimg = loadImage("images/CarrotSeed.png");
  bananaseedimg = loadImage("images/BananaSeed.png");
  grapeseedimg = loadImage("images/PeaSeed.png");
 
  //Land images
  farmlandimg = loadImage("images/Land.png");

  //Barrel images
  tbarrelimg = loadImage("images/TomatoBarrel.png");
  cbarrelimg = loadImage("images/CarrotBarrel.png");
  pbarrelimg = loadImage("images/PeaBarrel.png");
  gbarrelimg = loadImage("images/GrapeBarrel.png");
  bbarrelimg = loadImage("images/BananaBarrel.png");

  //Fully grown land images
  tfarmlandimg = loadImage("images/TomatoLand.png");
  cfarmlandimg = loadImage("images/CarrotLand.png");
  bfarmlandimg = loadImage("images/BananaLand.png");
  gfarmlandimg = loadImage("images/GrapeLand.png");
  pfarmlandimg = loadImage("images/PeaLand.png");

  // Seed land images
  tsfarmlandimg = loadImage("images/TomatoSeedLand.png");
  bsfarmlandimg = loadImage("images/BananaSeedLand.png");
  csfarmlandimg = loadImage("images/CarrotSeedLand.png");
  psfarmlandimg = loadImage("images/PeaSeedLand.png");
  gsfarmlandimg = loadImage("images/GrapeSeedLand.png");

  //Watering can image
  canimg = loadImage("images/Can.png");

  //Trash can image
  trashCanimg = loadImage("images/TrashCan.png");
 
  //market image
  marketimg = loadImage("images/Market.png");

  //Hand box image
  handimg = loadImage("images/Hand.png");

  //BELOW IS ALL THE IMAGES FOR THE HAND BOX
  tomatoSeedHandimg = loadImage("images/TomatoSeedHand.png");
  carrotSeedHandimg = loadImage("images/CarrotSeedHand.png");
  grapeSeedHandimg = loadImage("images/GrapeSeedHand.png");
  peaSeedHandimg = loadImage("images/PeaSeedHand.png");
  bananaSeedHandimg = loadImage("images/BananaSeedHand.png");
  canHandimg = loadImage("images/CanHand.png");

  tomatoHandimg = loadImage("images/TomatoHand.png");
  peaHandimg = loadImage("images/PeaHand.png");
  grapeHandimg = loadImage("images/GrapeHand.png");
  bananaHandimg = loadImage("images/BananaHand.png");
  carrotHandimg = loadImage("images/CarrotHand.png");

  //Dead plant images
  deadplantimg = loadImage("images/DeadPlant.png");
  deadplantlandimg = loadImage("images/DeadPlantLand.png");

  //Seed watering land images
  grapeWater = loadImage("images/GrapWaterLand.png");
  bananaWater = loadImage("images/BananaWaterLand.png");
  carrotWater = loadImage("images/CarrotWaterLand.png");
  tomatoWater = loadImage("images/TomatoWaterLand.png");
  peaWater = loadImage("images/PeaWaterLand.png");

  playimg = loadImage("images/Play.png");
  rushimg = loadImage("images/Rush.png");

  controlimg = loadImage("images/Control.png");

  controlsimg = loadImage("images/Controls.png");

  gameMusic = loadSound("Gameplay.mp3");
  menuMusic = loadSound("MainMenu.mp3");

  //crowimg = loadImage("images");
}


function setup() {

  createCanvas(displayWidth - 150, displayHeight - 150);
  
  //Barrel Sprites 
  tomato_barrel = createSprite(200,200);
  tomato_barrel.addImage(tbarrelimg);
  tomato_barrel.scale = 0.3;
  tomato_barrel.visible = false;

  pea_barrel = createSprite(400,200);
  pea_barrel.addImage(pbarrelimg);
  pea_barrel.scale = 0.3;
  pea_barrel.visible = false;

  grape_barrel = createSprite(600,200);
  grape_barrel.addImage(gbarrelimg);
  grape_barrel.scale = 0.3;
  grape_barrel.visible = false;

  carrot_barrel = createSprite(800,200);
  carrot_barrel.addImage(cbarrelimg);
  carrot_barrel.scale = 0.3;
  carrot_barrel.visible = false;

  banana_barrel = createSprite(1000,200);
  banana_barrel.addImage(bbarrelimg);
  banana_barrel.scale = 0.3;
  banana_barrel.visible = false;

  //Farmland sprites
  tfarmland1 = createSprite(200,400);
  tfarmland1.addImage(farmlandimg);
  tfarmland1.scale = 0.3;
  tfarmland1.visible = false;

  pfarmland1 = createSprite(400,400);
  pfarmland1.addImage(farmlandimg);
  pfarmland1.scale = 0.3;
  pfarmland1.visible = false;

  gfarmland1 = createSprite(600,400);
  gfarmland1.addImage(farmlandimg);
  gfarmland1.scale = 0.3;
  gfarmland1.visible = false;

  cfarmland1 = createSprite(800,400);
  cfarmland1.addImage(farmlandimg);
  cfarmland1.scale = 0.3;
  cfarmland1.visible = false;

  tfarmland2 = createSprite(200,600);
  tfarmland2.addImage(farmlandimg);
  tfarmland2.scale = 0.3;
  tfarmland2.visible = false;

  pfarmland2 = createSprite(400,600);
  pfarmland2.addImage(farmlandimg);
  pfarmland2.scale = 0.3;
  pfarmland2.visible = false;

  gfarmland2 = createSprite(600,600);
  gfarmland2.addImage(farmlandimg);
  gfarmland2.scale = 0.3;
  gfarmland2.visible = false;

  cfarmland2 = createSprite(800,600);
  cfarmland2.addImage(farmlandimg);
  cfarmland2.scale = 0.3;
  cfarmland2.visible = false;

  bfarmland1 = createSprite(1000,600);
  bfarmland1.addImage(farmlandimg);
  bfarmland1.scale = 0.3;
  bfarmland1.visible = false;

  bfarmland2 = createSprite(1000,400);
  bfarmland2.addImage(farmlandimg);
  bfarmland2.scale = 0.3;
  bfarmland2.visible = false;

  //Watering Can sprite
  can = createSprite(50,400,40,40);
  can.addImage(canimg);
  can.scale = 0.3;
  can.visible = false;

  //Trash can sprite
  trashCan = createSprite(1200,200);
  trashCan.addImage(trashCanimg);
  trashCan.scale = 0.3;
  trashCan.visible = false;

  //Market sprite
  market = createSprite(1300,500);
  market.addImage(marketimg);
  market.scale = 0.4;
  market.visible = false;

  //Hand box sprite
  handbox = createSprite(60,60);
  handbox.addImage(handimg);
  handbox.scale = 0.6;
  handbox.visible = false;

  //Human sprite
  human = createSprite(400,400);
  human.addImage(humanimg);
  human.scale = 0.3;
  human.visible = false;
  
  playBut = createSprite((displayWidth/2) - 150, (displayHeight/2));
  playBut.addImage(playimg);
  rush = createSprite((displayWidth/2) - 110, (displayHeight/2) - 300);
  rush.addImage(rushimg);
  control = createSprite((displayWidth/2) - 140, (displayHeight/2) + 200);
  control.addImage(controlimg);

  controls = createSprite((displayWidth/2) - 350, (displayHeight/2) - 100);
  controls.addImage(controlsimg);
  controls.visible = false;
  
}



function draw() {


  background("green");

  edges = createEdgeSprites();
  
  //All of the functions being called

  if (gameState === "home") {

    menu();
    //playBut.visible = true;
        
    
    
    if(keyDown("space")){
    start();
      
    }
  
    if (keyWentDown("c")) {
    fcontrol();
    }

  }

  //Displaying Score and Trashed Plants text
  else if (gameState === "play") {
    
    textSize(20);
    fill("black");
    text("Score: " + score, 575,75);
    text("Seconds Left: " + mainCounter, 575 , 50);
    text(gameState, 50, 550);
    //added ny Jay
    movement();

    pickingUpItem();

    droppingOffItem();

    spawn_crows();

    handing();
   

  }

  else if (gameState === "stop") {
    gameMusic.stop();
    fill("black");
    textSize(50);
    text("Your Score: " + score, 500,75);
    text("Trashed Plants: " + trashed_plants, 500, 150);
    text("Harvested Plants: " + harvested,500, 225);
    textSize(20);
    text("Press Space to play Again", (displayWidth/2) - 260, (displayHeight/2 + 100));
    text("Press H to go back to Menu", (displayWidth/2) - 260, (displayHeight/2 + 150));
    playBut.visible = true;
      
    text(gameState, 50, 550);

    if(keyDown("space")){
      start();
      
      }
    if (keyWentDown("h")) { 
        menu();
    }
    
  }
  else if(gameState ==="control"){
    fill("black");
    textSize(20);
    text("Press Space to play Again", (displayWidth/2) - 160, (displayHeight/2 + 100));
    text("Press H to go back to Menu", (displayWidth/2) - 160, (displayHeight/2 + 150));
    
    if(keyDown("space")){
      start();
      
      }
    if (keyWentDown("h")) { 
        menu();
    }

  }
  
  
  //Drawing sprites
  drawSprites();
}



function start() {
  
  
    menuMusic.stop();
   gameMusic.play();
    
  

    tomato_barrel.visible = true;
    pea_barrel.visible = true;
    grape_barrel.visible = true;
    carrot_barrel.visible = true;
    banana_barrel.visible = true;
    can.visible = true;
    trashCan.visible = true;
    market.visible = true;
    handbox.visible = true;
    human.visible = true;
    tfarmland1.visible = true;
    tfarmland2.visible = true;
    pfarmland1.visible = true;
    pfarmland2.visible = true;
    gfarmland1.visible = true;
    gfarmland2.visible = true;
    cfarmland1.visible = true;
    cfarmland2.visible = true;
    bfarmland1.visible = true;
    bfarmland2.visible = true;

    playBut.visible = false;
    rush.visible = false;
    control.visible = false;
    controls.visible = false;

    tfarmland1.addImage(farmlandimg);
    tfarmland2.addImage(farmlandimg);
    pfarmland1.addImage(farmlandimg);
    pfarmland2.addImage(farmlandimg);
    gfarmland1.addImage(farmlandimg);
    gfarmland2.addImage(farmlandimg);
    cfarmland1.addImage(farmlandimg);
    cfarmland2.addImage(farmlandimg);
    bfarmland1.addImage(farmlandimg);
    bfarmland2.addImage(farmlandimg);
    hand = "Empty";
    score = 0;
    trashed_plants = 0;
    harvested = 0;
    tfarm1Counter = -1;
    tfarm2Counter = -1;
    pfarm1Counter = -1;
    pfarm2Counter = -1;
    gfarm1Counter = -1;
    gfarm2Counter = -1;
    cfarm1Counter = -1;
    cfarm2Counter = -1;
    bfarm1Counter = -1;
    bfarm2Counter = -1;

    tfarm1deadcounter = -1;
    tfarm2deadcounter = -1;
    pfarm1deadcounter = -1;
    pfarm2deadcounter = -1;
    gfarm1deadcounter = -1;
    gfarm2deadcounter = -1;
    cfarm1deadcounter = -1;
    cfarm2deadcounter = -1;
    bfarm1deadcounter = -1;
    bfarm2deadcounter = -1;

    tfarm1waterdeadcounter = -1;
    tfarm2waterdeadcounter = -1;
    pfarm1waterdeadcounter = -1;
    pfarm2waterdeadcounter = -1;
    gfarm1waterdeadcounter = -1;
    gfarm2waterdeadcounter = -1;
    cfarm1waterdeadcounter = -1;
    cfarm2waterdeadcounter = -1;
    bfarm1waterdeadcounter = -1;
    bfarm2waterdeadcounter = -1;

    tfarm1watercounter = -1;
    tfarm2watercounter = -1;
    pfarm1watercounter = -1;
    pfarm2watercounter = -1;
    gfarm1watercounter = -1;
    gfarm2watercounter = -1;
    cfarm1watercounter = -1;
    cfarm2watercounter = -1;
    bfarm1watercounter = -1;
    bfarm2watercounter = -1;

    tfarm1HARVEST = "no";
    tfarm2HARVEST = "no";
    pfarm1HARVEST = "no";
    pfarm2HARVEST = "no";
    gfarm1HARVEST = "no";
    gfarm2HARVEST = "no";
    cfarm1HARVEST = "no";
    cfarm2HARVEST = "no";
    bfarm1HARVEST = "no";
    bfarm2HARVEST = "no";

    mainCounter = 10;

    game_number++;

    if (game_number === 1) {

      setInterval(timeIt, 1000);
     menuMusic.stop();

    }

    human.x = 400;
    human.y = 400;


    gameState = "play";
     

}



function fcontrol() {

   
    
    gameState = "control";
    
    
    
    rush.visible = false;
    control.visible = false;
    playBut.visible = false;
    controls.visible = true;
    
    //playBut.visible = true;
      
    console.log(gameState);    
    menuMusic.play();
    
  

}
function menu() {

  
  fill("black");
  textSize(20);
  text("Press Space to Play", (displayWidth/2) - 240, (displayHeight/2 + 100));
  text("Press C to see Controls", (displayWidth/2) - 250, (displayHeight/2 + 300));
  menuMusic.play();
  gameState = "home";
  rush.visible = true;
  control.visible = true;
  playBut.visible = true;
  controls.visible = false;

  
  

}
function timeIt() {

  if (mainCounter > -1) {

    mainCounter--;

  }

  if (mainCounter === 0) {
    gameMusic.stop();
    menuMusic.play();
    gameState = "stop";
    tomato_barrel.visible = false;
    pea_barrel.visible = false;
    grape_barrel.visible = false;
    carrot_barrel.visible = false;
    banana_barrel.visible = false;
    can.visible = false;
    trashCan.visible = false;
    market.visible = false;
    handbox.visible = false;
    human.visible = false;
    tfarmland1.visible = false;
    tfarmland2.visible = false;
    pfarmland1.visible = false;
    pfarmland2.visible = false;
    gfarmland1.visible = false;
    gfarmland2.visible = false;
    cfarmland1.visible = false;
    cfarmland2.visible = false;
    bfarmland1.visible = false;
    bfarmland2.visible = false;
   menuMusic.play();

  }

  ;

}

//THIS IS THE FUNCTION FOR MOVING THE CHARACTER
function movement() {

  if(keyDown(UP_ARROW)) {

    human.y = human.y - 15;

  }
  if(keyDown(DOWN_ARROW)) {

    human.y = human.y + 15;

  }
  if(keyDown(LEFT_ARROW)) {

    human.x = human.x - 15;

  }
  if(keyDown(RIGHT_ARROW)) {

    human.x = human.x + 15;

  }

  human.collide(edges);

}

//THIS IS THE FUNCTION FOR PICKING UP ITEMS
function pickingUpItem() {

  if (keyDown("w")) {

    //Picking up tomato seed
    if (human.isTouching(tomato_barrel) && hand !== "Dead Plant") {

      hand = "Tomato Seed";

    }

    //Picking up pea seed
    else if (human.isTouching(pea_barrel) && hand !== "Dead Plant") {

      hand = "Pea Seed";

    }

    //Picking up grape seed
    else if (human.isTouching(grape_barrel) && hand !== "Dead Plant") {

      hand = "Grape Seed";

    }

    //Picking up carrot seed
    else if (human.isTouching(carrot_barrel) && hand !== "Dead Plant") {

      hand = "Carrot Seed";

    }

    //Picking up banana seed
    else if (human.isTouching(banana_barrel) && hand !== "Dead Plant") {

      hand = "Banana Seed";

    }

    //Picking up Watering Can
    else if (human.isTouching(can)) {

      hand = "Watering Can";

    }

    //HARVESTING

    //Picking up tomato
    else if (human.isTouching(tfarmland1) && tfarm1HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Tomato";
      tfarmland1.addImage(farmlandimg);
      tfarm1HARVEST = "no";
      tfarm1deadcounter = -1;

    }

    else if (human.isTouching(tfarmland2) && tfarm2HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Tomato";
      tfarmland2.addImage(farmlandimg);
      tfarm2HARVEST = "no";
      tfarm2deadcounter = -1;

    }

    //Picking up Peas
    else if (human.isTouching(pfarmland1) && pfarm1HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Pea";
      pfarmland1.addImage(farmlandimg);
      pfarm1HARVEST = "no";
      pfarm1deadcounter = -1;

    }

    else if (human.isTouching(pfarmland2) && pfarm2HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Pea";
      pfarmland2.addImage(farmlandimg);
      pfarm2HARVEST = "no";
      pfarm2deadcounter = -1;

    }

    //Picking up Carrots
    else if (human.isTouching(cfarmland1) && cfarm1HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Carrot";
      cfarmland1.addImage(farmlandimg);
      cfarm1HARVEST = "no";
      cfarm1deadcounter = -1;

    }

    else if (human.isTouching(cfarmland2) && cfarm2HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Carrot";
      cfarmland2.addImage(farmlandimg);
      cfarm2HARVEST = "no";
      cfarm2deadcounter = -1;

    }

    //Picking up Bananas
    else if (human.isTouching(bfarmland1) && bfarm1HARVEST === "yes" && hand !== "Dead Plant" ) {

      hand = "Banana";
      bfarmland1.addImage(farmlandimg);
      bfarm1HARVEST = "no";
      bfarm1deadcounter = -1;

    }

    else if (human.isTouching(bfarmland2) && bfarm2HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Banana";
      bfarmland2.addImage(farmlandimg);
      bfarm2HARVEST = "no";
      bfarm2deadcounter = -1;

    }

    //Picking up Grapes
    else if (human.isTouching(gfarmland1) && gfarm1HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Grape";
      gfarmland1.addImage(farmlandimg);
      gfarm1HARVEST = "no";
      gfarm1deadcounter = -1;

    }

    else if (human.isTouching(gfarmland2) && gfarm2HARVEST === "yes" && hand !== "Dead Plant") {

      hand = "Grape";
      gfarmland2.addImage(farmlandimg);
      gfarm2HARVEST = "no";
      gfarm2deadcounter = -1;

    }

    //Picking up dead plants FOR ALL OF THE IF CONDITIONS BELOW
    else if (human.isTouching(tfarmland1) && tfarm1HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      tfarmland1.addImage(farmlandimg);
      tfarm1HARVEST = "no";
      
    }

    else if (human.isTouching(tfarmland2) && tfarm2HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      tfarmland2.addImage(farmlandimg);
      tfarm2HARVEST = "no";

    }

    else if (human.isTouching(pfarmland1) && pfarm1HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      pfarmland1.addImage(farmlandimg);
      pfarm1HARVEST = "no";

    }

    else if (human.isTouching(pfarmland2) && pfarm2HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      pfarmland2.addImage(farmlandimg);
      pfarm2HARVEST = "no";

    }

    else if (human.isTouching(gfarmland1) && gfarm1HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      gfarmland1.addImage(farmlandimg);
      gfarm1HARVEST = "no";

    }

    else if (human.isTouching(gfarmland2) && gfarm2HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      gfarmland2.addImage(farmlandimg);
      gfarm2HARVEST = "no";

    }

    else if (human.isTouching(cfarmland1) && cfarm1HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      cfarmland1.addImage(farmlandimg);
      cfarm1HARVEST = "no";

    }

    else if (human.isTouching(cfarmland2) && cfarm2HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      cfarmland2.addImage(farmlandimg);
      cfarm2HARVEST = "no";

    }

    else if (human.isTouching(bfarmland1) && bfarm1HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      bfarmland1.addImage(farmlandimg);
      bfarm1HARVEST = "no";

    }

    else if (human.isTouching(bfarmland2) && bfarm2HARVEST === "dead" && hand !== "Dead Plant") {

      hand = "Dead Plant";
      bfarmland2.addImage(farmlandimg);
      bfarm2HARVEST = "no";

    }
    //Picking up dead plants FOR ALL OF THE IF CONDITIONS ABOVE

  }

}

//FUNCTION FOR DROPPING UP ITEMS
function droppingOffItem() {

  if (keyDown("s")) {

    //Dropping off all of the seeds on the farmlands BELOW
    if (human.isTouching(tfarmland1) && hand !== "Empty" && hand === "Tomato Seed" && tfarm1HARVEST === "no") {

      hand = "Empty";
      tfarmland1.addImage(tsfarmlandimg);
      tfarm1HARVEST = "seed";
      tfarm1Counter = 20;
      tfarm1watercounter = 7;
      tfarm1++;
      if (tfarm1 === 1) {
        setInterval(tfarm1Timer,1000);
        setInterval(tfarm1WaterTimer,1000);
      }
      
      
    }

    if (human.isTouching(tfarmland2) && hand !== "Empty" && hand === "Tomato Seed" && tfarm2HARVEST === "no") {

      hand = "Empty";
      tfarmland2.addImage(tsfarmlandimg);
      tfarm2HARVEST = "seed";
      tfarm2Counter = 20;
      tfarm2watercounter = 7;
      tfarm2++;
      if (tfarm2 === 1) {
        setInterval(tfarm2Timer,1000);
        setInterval(tfarm2WaterTimer,1000);
      }

    }

    if (human.isTouching(pfarmland1) && hand !== "Empty" && hand === "Pea Seed" && pfarm1HARVEST === "no") {

      hand = "Empty";
      pfarmland1.addImage(psfarmlandimg);
      pfarm1HARVEST = "seed";
      pfarm1Counter = 22;
      pfarm1watercounter = 8;
      pfarm1++;
      if (pfarm1 === 1) {
        setInterval(pfarm1Timer,1000);
        setInterval(pfarm1WaterTimer,1000);
      }
      
    }

    if (human.isTouching(pfarmland2) && hand !== "Empty" && hand === "Pea Seed" && pfarm2HARVEST === "no") {

      hand = "Empty";
      pfarmland2.addImage(psfarmlandimg);
      pfarm2HARVEST = "seed";
      pfarm2Counter = 22;
      pfarm2watercounter = 8;
      pfarm2++;
      if (pfarm2 === 1) {
        setInterval(pfarm2Timer,1000);
        setInterval(pfarm2WaterTimer,1000);
      }
      
    }

    if (human.isTouching(gfarmland1) && hand !== "Empty" && hand === "Grape Seed" && gfarm1HARVEST === "no") {

      hand = "Empty";
      gfarmland1.addImage(gsfarmlandimg);
      gfarm1HARVEST = "seed";
      gfarm1Counter = 25;
      gfarm1watercounter = 9;
      gfarm1++;
      if (gfarm1 === 1) {
        setInterval(gfarm1Timer,1000);
        setInterval(gfarm1WaterTimer,1000);
      }
      
    }

    if (human.isTouching(gfarmland2) && hand !== "Empty" && hand === "Grape Seed" && gfarm2HARVEST === "no") {

      hand = "Empty";
      gfarmland2.addImage(gsfarmlandimg);
      gfarm2HARVEST = "seed";
      gfarm2Counter = 25;
      gfarm2watercounter = 9;
      gfarm2++;
      if (gfarm2 === 1) {
        setInterval(gfarm2Timer,1000);
        setInterval(gfarm2WaterTimer,1000);
      }
      
    }

    if (human.isTouching(cfarmland1) && hand !== "Empty" && hand === "Carrot Seed" && cfarm1HARVEST === "no") {

      hand = "Empty";
      cfarmland1.addImage(csfarmlandimg);
      cfarm1HARVEST = "seed";
      cfarm1Counter = 27;
      cfarm1watercounter = 10;
      cfarm1++;
      if (cfarm1 === 1) {
        setInterval(cfarm1Timer,1000);
        setInterval(cfarm1WaterTimer,1000);
      }
      
    }

    if (human.isTouching(cfarmland2) && hand !== "Empty" && hand === "Carrot Seed" && cfarm2HARVEST === "no") {

      hand = "Empty";
      cfarmland2.addImage(csfarmlandimg);
      cfarm2HARVEST = "seed";
      cfarm2Counter = 27;
      cfarm2watercounter = 10;
      cfarm2++;
      if (cfarm2 === 1) {
        setInterval(cfarm2Timer,1000);
        setInterval(cfarm2WaterTimer,1000);
      }
      
    }

    if (human.isTouching(bfarmland1) && hand !== "Empty" && hand === "Banana Seed" && bfarm1HARVEST === "no") {

      hand = "Empty";
      bfarmland1.addImage(bsfarmlandimg);
      bfarm1HARVEST = "seed";
      bfarm1Counter = 30;
      bfarm1watercounter = 12;
      bfarm1++;
      if (bfarm1 === 1) {
        setInterval(bfarm1Timer,1000);
        setInterval(bfarm1WaterTimer,1000);
      }
      
    }

    if (human.isTouching(bfarmland2) && hand !== "Empty" && hand === "Banana Seed" && bfarm2HARVEST === "no") {

      hand = "Empty";
      bfarmland2.addImage(bsfarmlandimg);
      bfarm2HARVEST = "seed";
      bfarm2Counter = 30;
      bfarm2watercounter = 12;
      bfarm2++;
      if (bfarm2 === 1) {
        setInterval(bfarm2Timer,1000);
        setInterval(bfarm2WaterTimer,1000);
      }
      
    }
    //Dropping off all of the seeds on the farmlands ABOVE


    //Dropping off plants in trash can
    if (human.isTouching(trashCan) && hand !== "Empty") {

      hand = "Empty";
      trashed_plants = trashed_plants + 1;
      score = score - 10;

    }

    //Selling fully grown plants BELOW
    if (human.isTouching(market) && hand === "Tomato") {

      hand = "Empty";
      score = score + 5;
      harvested++;

    }

    if (human.isTouching(market) && hand === "Carrot") {

      hand = "Empty";
      score = score + 20;
      harvested++;

    }

    if (human.isTouching(market) && hand === "Banana") {

      hand = "Empty";
      score = score + 25;
      harvested++;

    }

    if (human.isTouching(market) && hand === "Grape") {

      hand = "Empty";
      score = score + 15;
      harvested++;

    }

    if (human.isTouching(market) && hand === "Pea") {

      hand = "Empty";
      score = score + 10;
      harvested++;

    }
    //Selling fully grown plants ABOVE

    //Watering the plants BELOW
    if (human.isTouching(tfarmland1) && hand === "Watering Can" && tfarm1HARVEST === "water") {

      tfarmland1.addImage(tsfarmlandimg);
      tfarm1HARVEST = "seed";
      tfarm1watercounter = -1;
      tfarm1waterdeadcounter = -1;

    }

    if (human.isTouching(tfarmland2) && hand === "Watering Can" && tfarm2HARVEST === "water") {

      tfarmland2.addImage(tsfarmlandimg);
      tfarm2HARVEST = "seed";
      tfarm2watercounter = -1;
      tfarm2waterdeadcounter = -1;

    }

    if (human.isTouching(pfarmland1) && hand === "Watering Can" && pfarm1HARVEST === "water") {

      pfarmland1.addImage(psfarmlandimg);
      pfarm1HARVEST = "seed";
      pfarm1watercounter = -1;
      pfarm1waterdeadcounter = -1;

    }

    if (human.isTouching(pfarmland2) && hand === "Watering Can" && pfarm2HARVEST === "water") {

      pfarmland2.addImage(psfarmlandimg);
      pfarm2HARVEST = "seed";
      pfarm2watercounter = -1;
      pfarm2waterdeadcounter = -1;

    }

    if (human.isTouching(gfarmland1) && hand === "Watering Can" && gfarm1HARVEST === "water") {

      gfarmland1.addImage(gsfarmlandimg);
      gfarm1HARVEST = "seed";
      gfarm1watercounter = -1;
      gfarm1waterdeadcounter = -1;

    }

    if (human.isTouching(gfarmland2) && hand === "Watering Can" && gfarm2HARVEST === "water") {

      gfarmland2.addImage(gsfarmlandimg);
      gfarm2HARVEST = "seed";
      gfarm2watercounter = -1;
      gfarm2waterdeadcounter = -1;

    }

    if (human.isTouching(cfarmland1) && hand === "Watering Can" && cfarm1HARVEST === "water") {

      cfarmland1.addImage(csfarmlandimg);
      cfarm1HARVEST = "seed";
      cfarm1watercounter = -1;
      cfarm1waterdeadcounter = -1;

    }

    if (human.isTouching(cfarmland2) && hand === "Watering Can" && cfarm2HARVEST === "water") {

      cfarmland2.addImage(csfarmlandimg);
      cfarm2HARVEST = "seed";
      cfarm2watercounter = -1;
      cfarmwaterdeadcounter = -1;

    }

    if (human.isTouching(bfarmland1) && hand === "Watering Can" && bfarm1HARVEST === "water") {

      bfarmland1.addImage(bsfarmlandimg);
      bfarm1HARVEST = "seed";
      bfarm1watercounter = -1;
      bfarm1waterdeadcounter = -1;

    }

    if (human.isTouching(bfarmland2) && hand === "Watering Can" && bfarm2HARVEST === "water") {

      bfarmland2.addImage(bsfarmlandimg);
      bfarm2HARVEST = "seed";
      bfarm2watercounter = -1;
      bfarm2waterdeadcounter = -1;

    }
    //Watering the plants ABOVE

  }

}

function spawn_crows() {

  /*if (frameCount % 30 === 0) {

    var crow = createSprite(1700, random(300,700), 20, 20);
    crow.velocityX = random(-5,-15);
    crow.lifetime = (displayWidth - 150) / 5;
    
    

  }*/

}

//Function for changing the hand boc images
function handing() {

  if (hand === "Empty") {

    handbox.addImage(handimg);
    

  }

  if (hand === "Tomato Seed") {

    handbox.addImage(tomatoSeedHandimg);

  }

  if (hand === "Pea Seed") {

    handbox.addImage(peaSeedHandimg);

  }

  if (hand === "Banana Seed") {

    handbox.addImage(bananaSeedHandimg);

  }

  if (hand === "Grape Seed") {

    handbox.addImage(grapeSeedHandimg);

  }

  if (hand === "Carrot Seed") {

    handbox.addImage(carrotSeedHandimg);

  }

  if (hand === "Watering Can") {

    handbox.addImage(canHandimg);

  }

  if (hand === "Tomato") {

    handbox.addImage(tomatoHandimg);
    
  }

  if (hand === "Pea") {

    handbox.addImage(peaHandimg);
    
  }

  if (hand === "Carrot") {

    handbox.addImage(carrotHandimg);
    
  }

  if (hand === "Banana") {

    handbox.addImage(bananaHandimg);
    
  }

  if (hand === "Grape") {

    handbox.addImage(grapeHandimg);
    
  }

  if (hand === "Dead Plant") {

    handbox.addImage(deadplantimg);

  }


}

//THE REST OF THE FUNCTIONS BELOW ARE TIMERS

//Timer for SEED -> FULLY GROWN BELOW
function tfarm1Timer() {

  if (tfarm1Counter > -1) {

    tfarm1Counter--;

  }

  if (tfarm1Counter === 0) {

    tfarmland1.addImage(tfarmlandimg);
    tfarm1HARVEST = "yes";
    tfarm1dead++;
    if (tfarm1dead === 1) {
      setInterval(tfarm1DeadTimer,1000);
    }
    tfarm1deadcounter = 15;
    tfarm1Counter = -1;

  }


}

function tfarm2Timer() {

  if (tfarm2Counter > -1) {

    tfarm2Counter--;

  }

  if (tfarm2Counter === 0) {

    tfarmland2.addImage(tfarmlandimg);
    tfarm2HARVEST = "yes";
    tfarm2dead++;
    if (tfarm2dead === 1) {
      setInterval(tfarm2DeadTimer,1000);
    }
    tfarm2deadcounter = 15;
    tfarm2Counter = -1;

  }

}

function pfarm1Timer() {

  if (pfarm1Counter > -1) {

    pfarm1Counter--;

  }

  if (pfarm1Counter === 0) {

    pfarmland1.addImage(pfarmlandimg);
    pfarm1HARVEST = "yes";
    pfarm1dead++;
    if (pfarm1dead === 1) {
      setInterval(pfarm1DeadTimer,1000);
    }
    pfarm1deadcounter = 15;
    pfarm1Counter = -1;

  }


}

function pfarm2Timer() {

  if (pfarm2Counter > -1) {

    pfarm2Counter--;

  }

  if (pfarm2Counter === 0) {

    pfarmland2.addImage(pfarmlandimg);
    pfarm2HARVEST = "yes";
    pfarm2dead++;
    if (pfarm2dead === 1) {
      setInterval(pfarm2DeadTimer,1000);
    }
    pfarm2deadcounter = 15;
    pfarm2Counter = -1;

  }


}

function gfarm1Timer() {

  if (gfarm1Counter > -1) {

    gfarm1Counter--;

  }

  if (gfarm1Counter === 0) {

    gfarmland1.addImage(gfarmlandimg);
    gfarm1HARVEST = "yes";
    gfarm1dead++;
    if (gfarm1dead === 1) {
      setInterval(gfarm1DeadTimer,1000);
    }
    gfarm1deadcounter = 15;
    gfarm1Counter = -1;

  }


}

function gfarm2Timer() {

  if (gfarm2Counter > -1) {

    gfarm2Counter--;

  }

  if (gfarm2Counter === 0) {

    gfarmland2.addImage(gfarmlandimg);
    gfarm2HARVEST = "yes";
    gfarm2dead++;
    if (gfarm2dead === 1) {
      setInterval(gfarm2DeadTimer,1000);
    }
    gfarm2deadcounter = 15;
    gfarm2Counter = -1;

  }


}

function cfarm1Timer() {

  if (cfarm1Counter > -1) {

    cfarm1Counter--;

  }

  if (cfarm1Counter === 0) {

    cfarmland1.addImage(cfarmlandimg);
    cfarm1HARVEST = "yes";
    cfarm1dead++;
    if (cfarm1dead === 1) {
      setInterval(cfarm1DeadTimer,1000);
    }
    cfarm1deadcounter = 15;
    cfarm1Counter = -1;

  }


}

function cfarm2Timer() {

  if (cfarm2Counter > -1) {

    cfarm2Counter--;

  }

  if (cfarm2Counter === 0) {

    cfarmland2.addImage(cfarmlandimg);
    cfarm2HARVEST = "yes";
    cfarm2dead++;
    if (cfarm2dead === 1) {
      setInterval(cfarm2DeadTimer,1000);
    }
    cfarm2deadcounter = 15;
    cfarm2Counter = -1;

  }


}

function bfarm1Timer() {

  if (bfarm1Counter > -1) {

    bfarm1Counter--;

  }

  if (bfarm1Counter === 0) {

    bfarmland1.addImage(bfarmlandimg);
    bfarm1HARVEST = "yes";
    bfarm1dead++;
    if (bfarm1dead === 1) {
      setInterval(bfarm1DeadTimer,1000);
    }
    bfarm1deadcounter = 15;
    bfarm1Counter = -1;

  }


}

function bfarm2Timer() {

  if (bfarm2Counter > -1) {

    bfarm2Counter--;

  }

  if (bfarm2Counter === 0) {

    bfarmland2.addImage(bfarmlandimg);
    bfarm2HARVEST = "yes";
    bfarm2dead++;
    if (bfarm2dead === 1) {
      setInterval(bfarm2DeadTimer,1000);
    }
    bfarm2deadcounter = 15;
    bfarm2Counter = -1;

  }


}
//Timer for SEED -> FULLY GROWN ABOVE


//Timer for FULLY GROWN -> DEAD   BELOW
function tfarm1DeadTimer() {

  if (tfarm1deadcounter > -1) {

    tfarm1deadcounter--;

  }

  if (tfarm1deadcounter === 0) {

    tfarmland1.addImage(deadplantlandimg);
    tfarm1HARVEST = "dead";
    tfarm1deadcounter = -1;
    
  }

}

function tfarm2DeadTimer() {

  if (tfarm2deadcounter > -1) {

    tfarm2deadcounter--;

  }

  if (tfarm2deadcounter === 0) {

    tfarmland2.addImage(deadplantlandimg);
    tfarm2HARVEST = "dead";
    tfarm2deadcounter = -1;
    
  }

}

function pfarm1DeadTimer() {

  if (pfarm1deadcounter > -1) {

    pfarm1deadcounter--;

  }

  if (pfarm1deadcounter === 0) {

    pfarmland1.addImage(deadplantlandimg);
    pfarm1HARVEST = "dead";
    pfarm1deadcounter = -1;
    
  }

}

function pfarm2DeadTimer() {

  if (pfarm2deadcounter > -1) {

    pfarm2deadcounter--;

  }

  if (pfarm2deadcounter === 0) {

    pfarmland2.addImage(deadplantlandimg);
    pfarm2HARVEST = "dead";
    pfarm2deadcounter = -1;
    
  }

}

function gfarm1DeadTimer() {

  if (gfarm1deadcounter > -1) {

    gfarm1deadcounter--;

  }

  if (gfarm1deadcounter === 0) {

    gfarmland1.addImage(deadplantlandimg);
    gfarm1HARVEST = "dead";
    gfarm1deadcounter = -1;
    
  }

}

function gfarm2DeadTimer() {

  if (gfarm2deadcounter > -1) {

    gfarm2deadcounter--;

  }

  if (gfarm2deadcounter === 0) {

    gfarmland2.addImage(deadplantlandimg);
    gfarm2HARVEST = "dead";
    gfarm2deadcounter = -1;
    
  }

}

function cfarm1DeadTimer() {

  if (cfarm1deadcounter > -1) {

    cfarm1deadcounter--;

  }

  if (cfarm1deadcounter === 0) {

    cfarmland1.addImage(deadplantlandimg);
    cfarm1HARVEST = "dead";
    cfarm1deadcounter = -1;
    
  }

}

function cfarm2DeadTimer() {

  if (cfarm2deadcounter > -1) {

    cfarm2deadcounter--;

  }

  if (cfarm2deadcounter === 0) {

    cfarmland2.addImage(deadplantlandimg);
    cfarm2HARVEST = "dead";
    cfarm2deadcounter = -1;
    
  }

}

function bfarm1DeadTimer() {

  if (bfarm1deadcounter > -1) {

    bfarm1deadcounter--;

  }

  if (bfarm1deadcounter === 0) {

    bfarmland1.addImage(deadplantlandimg);
    bfarm1HARVEST = "dead";
    bfarm1deadcounter = -1;
    
  }

}

function bfarm2DeadTimer() {

  if (bfarm2deadcounter > -1) {

    bfarm2deadcounter--;

  }

  if (bfarm2deadcounter === 0) {

    bfarmland2.addImage(deadplantlandimg);
    bfarm2HARVEST = "dead";
    bfarm2deadcounter = -1;
    
  }

}
//Timer for FULLY GROWN -> DEAD   ABOVE


//TImer for Seed -> Watering the seed   BELOW
function tfarm1WaterTimer() {

  if (tfarm1watercounter > -1) {

    tfarm1watercounter--;

  }

  if (tfarm1watercounter === 0) {

    tfarmland1.addImage(tomatoWater);
    tfarm1HARVEST = "water";
    tfarm1water++;
    if (tfarm1water === 1) {
      setInterval(tfarm1waterdead,1000);
    }
    tfarm1waterdeadcounter = 7;
    tfarm1watercounter = -1;
    
  }

}

function tfarm2WaterTimer() {

  if (tfarm2watercounter > -1) {

    tfarm2watercounter--;

  }

  if (tfarm2watercounter === 0) {

    tfarmland2.addImage(tomatoWater);
    tfarm2HARVEST = "water";
    tfarm2water++;
    if (tfarm2water === 1) {
      setInterval(tfarm2waterdead,1000);
    }
    tfarm2waterdeadcounter = 7;
    tfarm2watercounter = -1;

    
  }

}

function pfarm1WaterTimer() {

  if (pfarm1watercounter > -1) {

    pfarm1watercounter--;

  }

  if (pfarm1watercounter === 0) {

    pfarmland1.addImage(peaWater);
    pfarm1HARVEST = "water";
    pfarm1water++;
    if (pfarm1water === 1) {
      setInterval(pfarm1waterdead,1000);
    }
    pfarm1waterdeadcounter = 8;
    pfarm1watercounter = -1;

    
  }

}

function pfarm2WaterTimer() {

  if (pfarm2watercounter > -1) {

    pfarm2watercounter--;

  }

  if (pfarm2watercounter === 0) {

    pfarmland2.addImage(peaWater);
    pfarm2HARVEST = "water";
    pfarm2water++;
    if (pfarm2water === 1) {
      setInterval(pfarm2waterdead,1000);
    }
    pfarm2waterdeadcounter = 8;
    pfarm2watercounter = -1;

    
  }

}

function bfarm1WaterTimer() {

  if (bfarm1watercounter > -1) {

    bfarm1watercounter--;

  }

  if (bfarm1watercounter === 0) {

    bfarmland1.addImage(bananaWater);
    bfarm1HARVEST = "water";
    bfarm1water++;
    if (bfarm1water === 1) {
      setInterval(bfarm1waterdead,1000);
    }
    bfarm1waterdeadcounter = 12;
    bfarm1watercounter = -1;

    
  }

}

function bfarm2WaterTimer() {

  if (bfarm2watercounter > -1) {

    bfarm2watercounter--;

  }

  if (bfarm2watercounter === 0) {

    bfarmland2.addImage(bananaWater);
    bfarm2HARVEST = "water";
    bfarm2water++;
    if (bfarm2water === 1) {
      setInterval(bfarm2waterdead,1000);
    }
    bfarm2waterdeadcounter = 12;
    bfarm2watercounter = -1;

    
  }

}

function cfarm1WaterTimer() {

  if (cfarm1watercounter > -1) {

    cfarm1watercounter--;

  }

  if (cfarm1watercounter === 0) {

    cfarmland1.addImage(carrotWater);
    cfarm1HARVEST = "water";
    cfarm1water++;
    if (cfarm1water === 1) {
      setInterval(cfarm1waterdead,1000);
    }
    cfarm1waterdeadcounter = 10;
    cfarm1watercounter = -1;

    
  }

}

function cfarm2WaterTimer() {

  if (cfarm2watercounter > -1) {

    cfarm2watercounter--;

  }

  if (cfarm2watercounter === 0) {

    cfarmland2.addImage(carrotWater);
    cfarm2HARVEST = "water";
    cfarm2water++;
    if (cfarm2water === 1) {
      setInterval(cfarm2waterdead,1000);
    }
    cfarm2waterdeadcounter = 10;
    cfarm2watercounter = -1;

    
  }

}

function gfarm1WaterTimer() {

  if (gfarm1watercounter > -1) {

    gfarm1watercounter--;

  }

  if (gfarm1watercounter === 0) {

    gfarmland1.addImage(grapeWater);
    gfarm1HARVEST = "water";
    gfarm1water++;
    if (gfarm1water === 1) {
      setInterval(gfarm1waterdead,1000);
    }
    gfarm1waterdeadcounter = 9;
    gfarm1watercounter = -1;

    
  }

}

function gfarm2WaterTimer() {

  if (gfarm2watercounter > -1) {

    gfarm2watercounter--;

  }

  if (gfarm2watercounter === 0) {

    gfarmland2.addImage(grapeWater);
    gfarm2HARVEST = "water";
    gfarm2water++;
    if (gfarm2water === 1) {
      setInterval(gfarm2waterdead,1000);
    }
    gfarm2waterdeadcounter = 9;
    gfarm2watercounter = -1;

    
  }

}
//Timer for Seed -> Watering the seed   ABOVE

//Timer for Watering the Seed -> Dead BELOW
function tfarm1waterdead() {

  if (tfarm1waterdeadcounter > -1) {

    tfarm1waterdeadcounter--;

  }

  if (tfarm1waterdeadcounter === 0) {

    tfarmland1.addImage(deadplantlandimg);
    tfarm1HARVEST = "dead";
    tfarm1Counter = -1;

  }

}

function tfarm2waterdead() {

  if (tfarm2waterdeadcounter > -1) {

    tfarm2waterdeadcounter--;

  }

  if (tfarm2waterdeadcounter === 0) {

    tfarmland2.addImage(deadplantlandimg);
    tfarm2HARVEST = "dead";
    tfarm2Counter = -1;

  }

}

function pfarm1waterdead() {

  if (pfarm1waterdeadcounter > -1) {

    pfarm1waterdeadcounter--;

  }

  if (pfarm1waterdeadcounter === 0) {

    pfarmland1.addImage(deadplantlandimg);
    pfarm1HARVEST = "dead";
    pfarm1Counter = -1;

  }

}

function pfarm2waterdead() {

  if (pfarm2waterdeadcounter > -1) {

    pfarm2waterdeadcounter--;

  }

  if (pfarm2waterdeadcounter === 0) {

    pfarmland2.addImage(deadplantlandimg);
    pfarm2HARVEST = "dead";
    pfarm2Counter = -1;

  }

}

function gfarm1waterdead() {

  if (gfarm1waterdeadcounter > -1) {

    gfarm1waterdeadcounter--;

  }

  if (gfarm1waterdeadcounter === 0) {

    gfarmland1.addImage(deadplantlandimg);
    gfarm1HARVEST = "dead";
    gfarm1Counter = -1;

  }

}

function gfarm2waterdead() {

  if (gfarm2waterdeadcounter > -1) {

    gfarm2waterdeadcounter--;

  }

  if (gfarm2waterdeadcounter === 0) {

    gfarmland2.addImage(deadplantlandimg);
    gfarm2HARVEST = "dead";
    gfarm2Counter = -1;

  }

}

function cfarm1waterdead() {

  if (cfarm1waterdeadcounter > -1) {

    cfarm1waterdeadcounter--;

  }

  if (cfarm1waterdeadcounter === 0) {

    cfarmland1.addImage(deadplantlandimg);
    cfarm1HARVEST = "dead";
    cfarm1Counter = -1;

  }

}

function cfarm2waterdead() {

  if (cfarm2waterdeadcounter > -1) {

    cfarm2waterdeadcounter--;

  }

  if (cfarm2waterdeadcounter === 0) {

    cfarmland2.addImage(deadplantlandimg);
    cfarm2HARVEST = "dead";
    cfarm2Counter = -1;

  }

}

function bfarm1waterdead() {

  if (bfarm1waterdeadcounter > -1) {

    bfarm1waterdeadcounter--;

  }

  if (bfarm1waterdeadcounter === 0) {

    bfarmland1.addImage(deadplantlandimg);
    bfarm1HARVEST = "dead";
    bfarm1Counter = -1;

  }

}

function bfarm2waterdead() {

  if (bfarm2waterdeadcounter > -1) {

    bfarm2waterdeadcounter--;

  }

  if (bfarm2waterdeadcounter === 0) {

    bfarmland2.addImage(deadplantlandimg);
    bfarm2HARVEST = "dead";
    bfarm2Counter = -1;

  }

}
