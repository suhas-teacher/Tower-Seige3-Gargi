//child class created through parent class
class Bluebox extends Box{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.image = loadImage("bluebox.png");
    }
}