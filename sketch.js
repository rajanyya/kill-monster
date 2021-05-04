const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground1, hero1,fly1;
var BackgroundImage, GroundImage, MonsterImage,  HeroImage;

function preload() {
  BackgroundImage = loadImage("BACKGROUND.png");
  HeroImage = loadImage("SUPERHERO.png")
MonsterImage = loadImage("MONSTER.png")

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground1 = new Ground(0,2500,3000,500)
  hero1= new Hero(300,1000,50)
  fly1= new Fly(bodyA,pointB)
}

function draw() {
  background(BackgroundImage);

}

