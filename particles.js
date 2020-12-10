class Particles{

constructor(x,y,width,height){
var options={

    //restitution:0.2
}




this.body=Bodies.rectangle(x,y,width,height,options);
//this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);

}

display(){

 
    rectMode(CENTER);
    fill("blue")
    ellipse(this.body.position.x, this.body.position.y, this.width, this.height);

}}

