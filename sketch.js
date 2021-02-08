const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground1,ground2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    polygon=new Polygon(200,50,50,50);
    sling = new Slingshot(polygon.body,{x:200,y:100});

    ground1=new Ground(500,300,280,30);
    ground2=new Ground(950,250,300,30);
    box1=new Box(380,200,50,50);
    box2=new Box(430,200,50,50);
    box3=new Box(480,200,50,50);
    box4=new Box(530,200,50,50);
    box5=new Box(580,200,50,50);
    box6=new Box(635,200,50,50);
    box8=new Box(480,200,50,50);
    box9=new Box(480,200,50,50);
    box10=new Box(480,200,50,50);
    box11=new Box(480,200,50,50);
    box12=new Box(480,200,50,50);
    box13=new Box(480,200,50,50);
    box14=new Box(480,200,50,50);
    box15=new Box(480,200,50,50);
    box16=new Box(480,200,50,50);



}
function draw(){
    background(0);
    Engine.update(engine);
    polygon.display();
    sling.display();
    ground1.display();
    ground2.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    


}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    sling.fly();
}
