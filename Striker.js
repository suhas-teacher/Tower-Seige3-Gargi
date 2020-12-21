//class for the stone
class Striker {
    constructor(x, y, sides, radius) {
        //properties of the stone
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        //image for the stone
        this.image = loadImage("hexagon.png");
        //stone body created here
        this.body = Bodies.polygon(x, y, sides, radius, options);
        World.add(world, this.body);
        this.radius = radius;
    }

    //display method to display the stone
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        tint("plum");
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}