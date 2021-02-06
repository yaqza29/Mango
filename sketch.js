
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1;
var world, boy;
var engine;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width / 2, 600, width, 20);

	stoneObj = new stone(237,420);

	launcherObject = new slingShot(stoneObj.body,{x:237,y:420})

	//Engine.run(engine);

}

function draw() {

	background(230);
	Engine.update(engine);
	//Add code for displaying text here!
	image(boy,200, 340, 200, 300);


	treeObj.display();
	mango1.display();

	groundObject.display();

	stoneObj.display();

	launcherObject.display();
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased() {
    launcherObject.fly();
  }
