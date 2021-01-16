var tom,jerry,ground

function preload() {

    ground = loadImage("images/garden.png")
    tom_running = loadAnimation("images/tomTwo.png","images/tomThree.png")
    jerry_running  = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
    tom_collided = loadAnimation("images/tomFour.png")
    jerry_collided = loadAnimation("images/jerryFour.png")
    tom_start = loadAnimation("images/tomOne.png")
    jerry_start = loadAnimation("images/jerryOne.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
  
    tom = createSprite(870,600)
    jerry = createSprite(200,600)
    tom.addAnimation("tom1",tom_start)
    jerry.addAnimation("jerry1",jerry_start)
  //tom.velocityX = -3
 //  jerry.velocityX = -3
    tom.scale = 0.1
    jerry.scale = 0.1
    //create tom and jerry sprites here
}

function draw() {

    background(ground);
    
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.velocityX = 0
        tom.x = 300
        //jerry.velocityX = 0
        tom.addAnimation("collided",tom_collided)
        tom.changeAnimation("collided")
        jerry.addAnimation("caught",jerry_collided)
        jerry.changeAnimation("caught")
        
    }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5
        //jerry.velocityX = -1
        console.log("insideLeftArrow")
        tom.addAnimation("running",tom_running)
        jerry.addAnimation("teasing",jerry_running)
        tom.changeAnimation("running")
        jerry.changeAnimation("teasing")
        jerry.frameDelay = 25

    }
    
  //For moving and changing animation write code here


}
