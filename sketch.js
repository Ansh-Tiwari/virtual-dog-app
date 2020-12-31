//Create variables here
var dog,dogImg,dogImg1,database,foods,foodstock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref(food);
  foodstock.on("value",readstock);
  foodstock.set(20);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=(0.2);
}


function draw() {  
background("blue");
if(foodS !== undefined){
  textsize(20);
  FileList(255);
  text("Note:Press up arrow to feed bubble milk",50,50);
  text("food remaining:"+foodS,150,150);

}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImgae(dogImg1);

}
if(KeyWentUp(UP_ARROW)){
   dog.addImage(dogImg1);
}
if(foodS===0){
  foodS=20;

}
  drawSprites();
 

}
function writeStock(x){
  if(x<=0){
    x=0;

  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    food:x
  });
}



