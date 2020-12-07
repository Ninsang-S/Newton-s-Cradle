const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
    var canvas = createCanvas(1000,1000)
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(150,100,80,80);
    ball2 = new Ball(230,100,80,80);
    ball3 = new Ball(310,100,80,80);
    ball4 = new Ball(390,100,80,80);
    ball5 = new Ball(470,100,80,80);

    rope1 = new String(ball1.body,{x: 150, y: 200})
    rope2 = new String(ball2.body,{x: 230, y: 200})
    rope3 = new String(ball3.body,{x: 310, y: 200})
    rope4 = new String(ball4.body,{x: 390, y: 200})
    rope5 = new String(ball5.body,{x: 470, y: 200})
}

function draw() {
    background("white")
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball1.body,{x: mouseX, y: mouseY});

}