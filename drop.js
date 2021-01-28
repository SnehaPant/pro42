class Drop{
    constructor(x,y,r){
     var option={
         friction:0.1
     }
        this.body=Bodies.circle(x,y,r,option)
        World.add(world, this.body);
        this.r=r
    }
  display(){
      
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
      
  }
  updateDrops(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}
}
 

