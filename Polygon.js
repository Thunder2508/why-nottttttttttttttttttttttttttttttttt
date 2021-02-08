class Polygon {
  constructor(x, y, width, height){
    //super(x,y,width,height);
    this.image = loadImage("polygon.png");
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

  }
  display(){

    //super.display();
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

  }

};
  