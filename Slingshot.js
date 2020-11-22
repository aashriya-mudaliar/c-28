class Slingshot{
    constructor(bodyA,pointB){
        var Options={
            bodyA:bodyA,
            pointB:pointB,
            length:19,
            stiffness:0.1
        }
        this.pointB=pointB
        this.sling=Constraint.create(Options)
World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if (this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}