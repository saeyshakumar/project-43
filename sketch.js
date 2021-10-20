var hasDocked = false
function preload(){
spacebj = loadImage("spacebg.jpg")
issImg = loadImage("iss.png")
sc1Img = loadImage("spacecraft1.png")
sc2Img = loadImage("spacecraft2.png")
sc3Img = loadImage("spacecraft3.png")
sc4Img = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285, 240);
  spacecraft.addImage(sc1Img)
  spacecraft.scale  = 0.15
  iss = createSprite(330,160)
  iss.addImage(issImg)
  iss.scale = 0.8
}

function draw() {
  background(spacebj); 
  spacecraft.addImage(sc1Img)
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(sc2Img)
      spacecraft.y = spacecraft.y - 2
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(sc4Img)
      spacecraft.x = spacecraft.x - 1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(sc3Img)
      spacecraft.x = spacecraft.x + 1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc2Img)
    }
  } 
  if(spacecraft.y <= (iss.y + 40)&& spacecraft.x <= (iss.x - 10)){
    hasDocked = true
    fill ("white")
    textSize(25)
    text("Docking succesful!", 200,300)
  }
  drawSprites();
}