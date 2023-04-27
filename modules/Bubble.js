import { toDeg } from './system.js'
import { rangeOverlap } from './system.js'
import { rangesOverlap } from './system.js'
import { rangesOverlap2 } from './system.js'
import { getId } from '../main.js'

export class Bubble {
    constructor(id, parent, x, y, d, angle, dist) {
        this.id = id
        this.parent = parent
        this.x = x
        this.y = y
        this.d = d
        this.angle = angle
        this.dist = dist
        this.child = []
        this.rangeEx = []
    }
    show() {
        ellipse(this.x, this.y, this.d)
        this.child.forEach((e) => {
            e.show()
        })
        text(this.id, this.x, this.y)

        this.rangeEx.forEach((e) => {
            text(Math.round(e[0]*100)/100, this.x + 100*cos(e[0]), this.y + 100*sin(e[0]))
            text(Math.round(e[1]*100)/100, this.x + 100*cos(e[1]), this.y + 100*sin(e[1]))

            line(this.x, this.y, this.x+500*cos(e[0]), this.y+500*sin(e[0]))
            line(this.x, this.y, this.x+500*cos(e[1]), this.y+500*sin(e[1]))
        })
    }
    createChild(attempt) {
        console.log("createChild()")
        attempt++
        if (attempt == 10) {
            console.log("Failed to create child.")
            return
        }

        let d = this.d *            randRange(1, 1)
        let dist = (this.d+d)/3*2*  randRange(1, 1)
        let angle = Math.PI*2*Math.random()

        let x = this.x + dist*Math.cos(angle)
        let y = this.y + dist*Math.sin(angle)

        //let center = Math.atan2(y-this.y, x-this.x) 
        let margin = Math.asin(d/2/dist)
        let range = [angle-margin, angle+margin]

        if (!rangesOverlap2(this.rangeEx, range)) {
            console.log("Clear! Creating child..")
            this.child.push(new Bubble(getId(), this, x, y, d, angle, dist))
            this.rangeEx.push(range)
        } else {
            console.log("Overlap! New attempt..")
            this.createChild(attempt)
        }
    }
}

function randRange(min, max) {
    return min + (max-min)*Math.random()
}