//creating constraint through this class
class Chain {
    constructor(bodyA, pointB) {
        //properties of the chain
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = bodyA;
        //creating the limitation
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    //fly method to release the stone
    fly() {
        this.chain.bodyA = null;
    }

    //reattaching the stone for another turn
    attach() {
        this.chain.bodyA = this.bodyA;
    }

    //displaying the line of constraint
    display() {
        if(this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(5);
            stroke("yellow");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}