import Square from "./Square.js";
class Player extends Square {
    constructor(xpos, ypos, color, drawingType, drawingsList) {
        super()
        this.drawingsList = drawingsList;
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.speed = 6;
        this.drawingType = drawingType;
        this.listForDrawing()
        this.activateControls()
    }
    height = 30;
    width = 30;
    listForDrawing() {
        this.drawingsList.player = {
            xpos: this.xpos,
            ypos: this.ypos,
            color: this.color,
            height: 30,
            width: 30,
            drawingType: this.drawingType
        }
    }
    activateControls() {
        const keepGoing = {
            a: true,
            d: true,
            w: true,
            s: true,
        }
        const pressedIntervals = {
            a: false,
            d: false,
            s: false,
            w: false
        }
        const pressedKeys = {
            a: false,
            d: false,
            s: false,
            w: false
        }
        window.addEventListener("keydown", (event) => {
            const key = event.key;
            switch (key) {
                case "d":
                    if (!pressedKeys.d) {
                        pressedKeys.d = true;
                        if (pressedKeys.a && keepGoing.a) {
                            keepGoing.a = false;
                        }
                        pressedIntervals.d = setInterval(() => {
                            if (keepGoing.d) {
                                this.xpos += this.speed;
                                this.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
                case "a":
                    if (!pressedKeys.a) {
                        pressedKeys.a = true;
                        if (pressedKeys.d && keepGoing.d) {
                            keepGoing.d = false;
                        }
                        pressedIntervals.a = setInterval(() => {
                            if (keepGoing.a) {
                                this.xpos -= this.speed;
                                this.listForDrawing()
                            }
                        }, 16)
                    }
                    break;

                case "w":
                    if (!pressedKeys.w) {
                        pressedKeys.w = true;
                        if (pressedKeys.s && keepGoing.s) {
                            keepGoing.s = false;
                        }
                        pressedIntervals.w = setInterval(() => {
                            if (keepGoing.w) {
                                this.ypos -= this.speed;
                                this.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
                case "s":
                    if (!pressedKeys.s) {
                        pressedKeys.s = true;
                        if (pressedKeys.w && keepGoing.w) {
                            keepGoing.w = false;
                        }
                        pressedIntervals.s = setInterval(() => {
                            if (keepGoing.s) {
                                this.ypos += this.speed;
                                this.listForDrawing()
                            }
                        }, 16)
                    }
                    break;
            }
        })
        window.addEventListener("keyup", (event) => {
            const key = event.key;
            switch (key) {
                case "d":
                    pressedKeys.d = false;
                    clearInterval(pressedIntervals.d)
                    if (pressedKeys.a && !keepGoing.a) {
                        keepGoing.a = true;
                    }
                    keepGoing.d = true;
                    break;
                case "a":
                    pressedKeys.a = false;
                    clearInterval(pressedIntervals.a)
                    if (pressedKeys.d && !keepGoing.d) {
                        keepGoing.d = true;
                    }
                    keepGoing.a = true;
                    break;
                case "w":
                    pressedKeys.w = false;
                    clearInterval(pressedIntervals.w)
                    if (pressedKeys.s && !keepGoing.s) {
                        keepGoing.s = true;
                    }
                    keepGoing.w = true;
                    break;
                case "s":
                    pressedKeys.s = false;
                    clearInterval(pressedIntervals.s)
                    if (pressedKeys.w && !keepGoing.w) {
                        keepGoing.w = true;
                    }
                    keepGoing.s = true;
                    break;
            }
        })
    }

}

export default Player;