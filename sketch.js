const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var man1
var maxDrops=100
var rain=[]

function preload(){
   
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0;i<maxDrops;i++){
        rain.push(new Drop(random(0,400),random(0,400),7))
    }
    for(var i=0;i<maxDrops;i++){
        rain.push(new Drop(random(0,400),random(0,400),7))
    }
    man1=new Umbrella(200,500,50,50)
}

function draw(){
    background("black")
    Engine.update(engine); 
    imageMode(CENTER); 
  for(var i=0;i <rain.length;i++)
  {
      rain[i].display()
    
  }
  for(var i=0;i <rain.length;i++)
  {
      rain[i].updateDrops()
    
  }
 man1.display()
}  

