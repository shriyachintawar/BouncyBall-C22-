const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground,ball;
function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var ground_options ={
    isStatic: true
  }
  var ball_options ={
    restitution : 1
  }
  ground = Bodies.rectangle(200,390,20,20,ground_options);
  World.add(myworld,ground);
  console.log(ground);
  
  console.log(ground.position.x);
  console.log(ground.position.y);

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myworld,ball);
  
}

function draw() {
  background("black");  
  rectMode(CENTER);
  
  
  rect(ground.position.x,ground.position.y,200,20);
  Engine.update(myengine);
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20);
}