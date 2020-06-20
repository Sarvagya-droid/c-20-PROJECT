var car, carImg, speed, weight, fatalityMeasure, collider123;

function preload(){
  carImg = loadImage("bike.png");
}

function setup(){
  createCanvas(1200, 420);
  car = createSprite(220, 320);
  car.addImage("car", carImg);
  car.scale = 0.2;
  collider123 = createSprite(1150, 200, 50, 200);
  car.velocityX = 5;
 // createEdgesSprites;
}

function draw(){
  background("purple");
  speed = car.velocityX * 22;
  weight = 2500;
  fatalityMeasure = 0.5 * weight * speed * speed / 22500;

  console.log(fatalityMeasure);

  if(keyDown("a")){
    car.velocityX = car.velocityX + 2.5;
  /*}else{
      
  }*/
  if(car.velocityX > 0){
    car.velocityX = car.velocityX + 1;
  }}
  if(car.isTouching(collider123) && fatalityMeasure > 180){
    text("Lethal", 600, 200);
    car.collide(collider123);
  } else if(car.isTouching(collider123) && fatalityMeasure < 180 && 80 < fatalityMeasure){
     text("Average", 600, 200);
     car.collide(collider123);
  } else if(car.isTouching(collider123) && fatalityMeasure < 80){
    text("Safe", 600, 200);
    car.collide(collider123);}
  drawSprites();
}