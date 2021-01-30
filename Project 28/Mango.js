class Mango extends BaseClass {
    constructor(x,y) {
        super(x,y,40,40);
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.image = loadImage("mango.png");
    }
};