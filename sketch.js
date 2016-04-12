// Your game will go here

// For performance reasons, use a small canvas size for your project (< 500 px)

var player;
var cats;
var catSprites;
var createCats;
var score;
var scoreboardText1 = "You have rescued";
var scoreboardText2 = "cats today.";
var rescueScore;


function setup(){

  createCanvas(450,450);
  player = createSprite (width/2, height-25,35,35);
  player.shapeColor = color(204, 230, 255);

var timer = setInterval(createCats,3000);
}

function createCats(){
  for(var i = 0;i<20;i++){
    var cats = createSprite(random(0,width), random(-height,0), 40, 40);
    cats.shapeColor = color(0,255,0);
    cats.setVelocity(0,3);
    cats.life = 300;
    catSprites.add(cats);
    }

}

function draw(){

  background(190);
  drawSprites();

  if(keyIsPressed){
        if(keyCode == LEFT_ARROW){
          player.setVelocity(-5,0); //<-- move left by subtracting from x
        }
        if(keyCode == RIGHT_ARROW){
          player.setVelocity(5,0); //<-- move right by adding to x
        }
      } else{
        player.setVelocity(0,0); //<-- if no key is pressed stop moving
      }


      //add this somewhere in your draw function:
      player.overlap(catSprites, rescue);
      //you can call this function anything you want

      var rescueScore = 0
      function rescue(player, cats) {  //<-- spriteA is the player, spriteB is the food
        spriteB.remove(); //<-- this deletes the food
        rescueScore += 1 ;
            }
  //viewable scoreboard
      textSize(14);
      text(scoreboardText1,25,30);
      text(rescueScore, 25, 40);
      text(scoreboardText2,25,50);

}
