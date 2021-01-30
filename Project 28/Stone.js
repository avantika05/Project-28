class Stone extends BaseClass {
    constructor(x,y,width,height){
        super(x,y,60,60);
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("stone.png");
    }
};