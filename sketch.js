const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function preload() {
    helicopterImage = loadImage("helicopter.png");
    packageImage = loadImage("package.png");
}

function setup() {
    canvas = createCanvas(400,400);

    line = createSprite(200,80,30,30);
    line.visible = false;

    line2 = createSprite(40,60,15,15);
    line2.visible = false;

    pckage = createSprite(200,50,10,10);
    pckage.addImage(packageImage);
    pckage.scale = 0.14;
    pckage.visible = false;

    ground2 = createSprite(200,370,100,10);
    ground2.visible = false;

    helicopter = createSprite(40,43,10,10);
    helicopter.addImage(helicopterImage);
    helicopter.scale = 0.3;
    helicopter.debug = false;

    engine = Engine.create();
    world = engine.world;

    ground = new grnd(200,380,800,10);
    rect1 = new box(200,370,100,10);
    rect2 = new box(150,335,10,80);
    rect3 = new box(250,335,10,80);
}

function draw() {
    background("black");
    Engine.update(engine);
    if(keyDown("LEFT_ARROW")) {
        helicopter.x = helicopter.x-4;
        line2.x = line2.x-4;
    }
    else if(keyDown("RIGHT_ARROW")) {
        helicopter.x = helicopter.x+4;
        line2.x = line2.x+4;
    }

    if(keyDown("DOWN_ARROW")) {
        pckage.visible = true;
        pckage.velocityY= 4;
    }

    if(pckage.isTouching(ground2)) {
        pckage.velocityY = 0;
    }

    ground.display();
    rect1.display();
    rect2.display();
    rect3.display();
    drawSprites();
}
