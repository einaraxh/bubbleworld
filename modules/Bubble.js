export class Bubble {
    constructor(parent, x, y, d) {
        this.parent = parent
        this.x = x
        this.y = y
        this.d = d
        this.child = []
        this.rangeEx = []
    }
    show() {
        ellipse(this.x, this.y, this.d)
        this.child.forEach((e) => {
            e.show()
        })
        text("O", this.x, this.y)
        this.rangeEx.forEach((e) => {
            text(   Math.round(e.origin/Math.PI*180),
                    this.x + this.d/2*Math.cos(e.origin), 
                    this.y + this.d/2*Math.sin(e.origin))
        })
    }
    createChild() {
        let _d = this.d * randRange(0.9, 1.1)
        let angle = 360*randRange(0.9, 1.1)
        let dist = (this.d+_d)/3*2*randRange(0.9, 1.1)
        console.log(dist)
        let _x = this.x + dist*Math.cos(angle)
        let _y = this.y + dist*Math.sin(angle)
        this.child.push(new Bubble(this, _x, _y, _d))
        this.rangeEx.push({
            origin: Math.atan2(_y-this.y, _x-this.x)
        })
    }
}

function randRange(min, max) {
    return min + (max-min)*Math.random()
}