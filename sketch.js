var ship, ship_moving, edges;
var seaImage;
var sea;

function preload() {
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(800, 800);

  // creating trex
  ship = createSprite(50, 160, 20, 50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();

  //adding scale and position to trex
  ship.scale = 0.5;
  ship.x = 50;
  sea = createSprite(200, 180, 400, 20);
  sea.addImage(seaImage);
  sea.scale = 0.2;
}


function draw() {
  //set background color 
  background("white");


  //code to reset the background
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  //move when  left and right key is pressed
  if (keyDown("left") || "right") {
    ship.velocityX = 10;
    ship.velocityX = -10;
  }

  ship.velocityX = ship.velocityX + 0.5;

  drawSprites();
}