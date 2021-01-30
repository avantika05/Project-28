
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1, stone, tree;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(60,height,1200,20);
	mango1 = new Mango(500,500,15,15);
	mango2 = new Mango(600,600,15,15);
	mango3 = new Mango(700,650,15,15);
	mango4 = new Mango(550,680,15,15);
	mango5 = new Mango(650,530,15,15);

	tree = new Tree(150,305,300,50);
	stone = new Stone(200,60,50,50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	detectollision(stoneObj,mango1);
	detectollision(stoneObj,mango2);
	detectollision(stoneObj,mango3);
	detectollision(stoneObj,mango4);
	detectollision(stoneObj,mango5);

	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	stone.display();
	tree.display();
	boy.display();

	drawSprites();
 
}

function mouseDragged () {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased () {
    launcher.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detecollision(Lston, Lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, sonteBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r/lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}