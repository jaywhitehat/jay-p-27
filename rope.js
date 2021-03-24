class Rope {
    constructor(bodyA,bodyB){
    var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:50,
    stiffness:0.1
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
    
        strokeWeight(4);
        
        line (posA.x,posA.y,posB.x,posB.y);
    }
    }