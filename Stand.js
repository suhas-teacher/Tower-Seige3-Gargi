//ground and stand for the boxes created using this class
class Stand {
    constructor(x, y, width, height) {
        //properties
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //creating the body
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    //display method to display the stand or ground
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("chocolate");
        rect(pos.x, pos.y, this.width, this.height);
    }
}