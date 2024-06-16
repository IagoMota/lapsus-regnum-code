import Square from "./Square.js";
class Player extends Square {
    constructor(xpos, ypos, color, drawingType, drawingsList) {
        super()
        this.drawingsList = drawingsList;
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.drawingType = drawingType;
        this.listForDrawing()
    }
    listForDrawing() {
        this.drawingsList.push({
            xpos: this.xpos,
            ypos: this.ypos,
            color: this.color,
            drawingType: this.drawingType
        })
    }
}

export default Player;