//child class created through parent class
class Pinkbox extends Box {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage("pinkbox.png");
    }
}