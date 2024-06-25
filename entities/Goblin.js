import HpBar from "./dependencies/HpBar.js"

class Goblin {
    constructor(xpos, ypos, color, drawingType, drawingsList, name) {
        this.drawingsList = drawingsList;
        this.xpos = xpos;
        this.ypos = ypos;
        this.color = color;
        this.drawingType = drawingType;
        this.hpBar = new HpBar(10, this.xpos, this.ypos, this.drawingsList);
        this.listForDrawing()
        this.hpBar.listForDrawing()
    }
    height = 30;
    width = 30;
    listForDrawing() {
        this.drawingsList[`goblin${name++}`] = {
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