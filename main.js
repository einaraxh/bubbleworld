window.setup = setup
window.draw = draw

import { Bubble } from './modules/Bubble.js'
const dim = {x:720, y:720}

let bubbleId = 0
export function getId() {
    bubbleId++
    return bubbleId-1
}

let bubble = new Bubble(getId(), null, dim.x/2, dim.y/2, 120, null, null)
bubble.createChild(0)
bubble.createChild(0)
bubble.createChild(0)
bubble.createChild(0)

function setup() {
    //angleMode(DEGREES)
    textAlign(CENTER)
    createCanvas(dim.x, dim.y)
    noFill()
    stroke(0)
}

function draw() {
    background(220)
    bubble.show()
}