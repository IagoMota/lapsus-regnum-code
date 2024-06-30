import HpList from "../../system/globalObjects/HpList.js";


class HpBar {
    constructor(name, hitPoints, xpos, ypos, width){
        this.name = name;
        this.hitPoints = hitPoints;
        this.xpos = xpos;
        this.ypos = ypos - 14;
        this.height = 10;
        this.width = width;
        this.color = "red";
        this.drawingType = "square"
        this.listForDrawing()
    }
    listForDrawing() {
        HpList[this.name] = {
            xpos: this.xpos,
            ypos: this.ypos,
            color: this.color,
            height: this.height,
            width: this.width,
            drawingType: this.drawingType
        }
    }
}

export default HpBar;