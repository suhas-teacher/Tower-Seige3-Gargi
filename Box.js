//parent class for other box classes
class Box {
    constructor(x, y, width, height) {
        //properties of the boxes
        var options = {
            friction: 0.0,
            restitution: 1,
            isStatic: false,
            density: 5
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //loading the respective image for the respective box
        this.image = loadImage("whitebox.png");
        //body created here
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.Visibility = 255;
        World.add(world, this.body); 
    }

    //score method to increase the score
    score() {
        if(this.Visibility <= 0 && this.Visibility >= -500) {
            score++;
        }
    }

    //display method to display the boxes
    display() {
        if(this.body.speed <= 8) {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        } else {
            //process for vanishing effect
            World.remove(world, this.body);
            push();
            this.Visibility -= 8;
            tint(255, this.Visibility);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
}