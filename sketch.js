const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var particle;
var gameState=play;
var particles=[];
var plinkos=[];
var divisions=[];
var score=0;



var divisionHeight=300;



function setup() {
  createCanvas(500,800);
 // createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
ground=new Ground(width/2,770,width,20)

division1=new Divisions(385,595,10,370)
division2=new Divisions(285,595,10,370)
division3=new Divisions(185,595,10,370)
division4=new Divisions(85,595,10,370)
plinko1=new Plinko(450,300,20,20)
plinko2=new Plinko(350,300,20,20)
plinko3=new Plinko(250,300,20,20)
plinko4=new Plinko(150,300,20,20)
plinko5=new Plinko(50,300,20,20)
plinko6=new Plinko(410,200,20,20)
plinko7=new Plinko(310,200,20,20)
plinko8=new Plinko(210,200,20,20)
plinko9=new Plinko(110,200,20,20)
plinko10=new Plinko(10,200,20,20)
plinko11=new Plinko(460,100,20,20)
plinko12=new Plinko(360,100,20,20)
plinko13=new Plinko(260,100,20,20)
plinko14=new Plinko(160,100,20,20)
plinko15=new Plinko(60,100,20,20)
plinko16=new Plinko(320,40,20,20)
plinko17=new Plinko(220,40,20,20)
plinko18=new Plinko(120,40,20,20)
plinko19=new Plinko(420,40,20,20)
particle1=new Particles(250,10,5,5)
particle2=new Particles(350,20,5,5)
particle3=new Particles(450,20,5,5)
particle4=new Particles(150,10,5,5)
particle5=new Particles(150,10,5,5)
particle6=new Particles(120,10,5,5)
particle7=new Particles(140,10,5,5)
particle8=new Particles(100,10,5,5)
particle9=new Particles(140,10,5,5)
particle10=new Particles(350,10,5,5)
particle11=new Particles(250,10,5,5)
particle12=new Particles(100,10,5,5)
particle13=new Particles(450,10,5,5)
particle14=new Particles(550,10,5,5)
particle15=new Particles(200,10,5,5)
particle16=new Particles(490,10,5,5)
particle17=new Particles(340,10,5,5)
particle18=new Particles(220,10,5,5)
particle19=new Particles(150,10,5,5)
particle20=new Particles(310,10,5,5)





Engine.run(engine);

}



function draw() {
  background("black");  
 
 text("score"+score,100,80)
 
 
 
 
 
 
  drawSprites();
ground.display();
division1.display();
division2.display();
division3.display();
division4.display();
plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
particle1.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
particle6.display();
particle7.display();
particle8.display();
particle9.display();
particle10.display();
particle11.display();
particle12.display();
particle13.display();
particle14.display();
particle15.display();
particle16.display();
particle17.display();
particle18.display();
particle19.display();
particle20.display();


}


function mousePressed()
{

if(gameState!=="end")
{
count++;
particle=new Particles(mouseX,10,10,10)

}

}

if(particle!=null){
particle.display();
if(particle.body.position.y>760){

if(particle.body.position.x < 300){
score=score+500
particle=null
if(count>= 5)gameState = "end"; 


}


}




}




