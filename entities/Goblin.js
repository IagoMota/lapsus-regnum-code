import Square from "./Square.js";
let goblinCounter = 0;
class Goblin extends Square {
    constructor(xpos, ypos, color, drawingType, drawingsList) {
        super()
        this.drawingsList = drawingsList;
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.speed = 6;
        this.drawingType = drawingType;
        this.listForDrawing()
    }
    height = 30;
    width = 30;
    listForDrawing() {
        this.drawingsList[`goblin${goblinCounter++}`] = {
            xpos: this.xpos,
            ypos: this.ypos,
            color: this.color,
            height: 30,
            width: 30,
            drawingType: this.drawingType
        }
    }
}

export default Goblin;