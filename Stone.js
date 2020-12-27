class Stone {
    constructor(x,y,w,h,options){
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
        }   
        this.stone=Bodies.circle(100,190,10,10,options)
        World.add(world,this.stone)
    }
    display(){
        ellipes(RADIUS)
        ellipesMode(this.stone.position.x,this.stone.position.y,10,10)
    }

}