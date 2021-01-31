class Polygon {
    constructor(x, y, width,height) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2
        }
        this.image=loadImage("polygon.png")
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        rotate(angle)
        strokeWeight(4);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}