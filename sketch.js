//project whitehat jr PROJECT CLASS 19;
//cars 
var car1,car2,car3;

//wall
var wall1,wall2,wall3;

//weight
var weight1,weight2,weight3;

//deformation
var deformation1,deformation2,deformation3;

function setup(){
 createCanvas(800,400);
 
  //wall1
  wall1 = createSprite(750,300,10,40);
  wall1.shapeColor = "white";

  //wall2
  wall2 = createSprite(750,200,10,40);
  wall2.shapeColor = "white";
  
  //wall2
  wall3 = createSprite(750,100,10,40);
  wall3.shapeColor = "white";

  //car1
  car1 = createSprite(100,300,40,10);
  car1.velocityX = random(5,50);

  //car2
  car2 = createSprite(100,200,40,10);
  car2.velocityX = random(5,50);

  //car3
  car3 = createSprite(100,100,40,10);
  car3.velocityX = random(5,50);

  //weight
  weight = random(55,500);  
  weight2 = random(55,500);
  weight3 = random(55,500);

  //deformation
  deformation1 = (car1.velocityX*weight)/40;
  deformation2 = (car2.velocityX*weight2)/40;
  deformation3 = (car3.velocityX*weight3)/40;
}

function draw() {
  background("black");  
  drawSprites();

  //collide
  car1.collide(wall1);
  car2.collide(wall2);
  car3.collide(wall3);

  //deformation1
  
  if(deformation1 > 80 && deformation1 < 180){
car1.shapeColor = "yellow"; 
  }

  if (deformation1 < 80){
car1.shapeColor = "green";
}
 
  if(deformation1 > 180){
car1.shapeColor = "red";
}


//deformation2
  if(deformation2 > 180){
car2.shapeColor = "red";
}
  
  if(deformation2 > 80 && deformation2 < 180){
car2.shapeColor = "yellow"; 
}
  
  if (deformation2 < 80){
car2.shapeColor = "green";
}

//deformation3
  if (deformation3 > 180){
  car3.shapeColor = "red";
    }
  
    if(deformation3 > 80 && deformation3< 180){
  car3.shapeColor = "yellow"; 
    }
  
  if (deformation3 < 80){
  car3.shapeColor = "green";
  }

}
//END