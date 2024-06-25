let hpBarCounter = 0;
class HpBar {
    constructor(hitPoints, xpos, ypos, drawingsList){
        this.hitPoints = hitPoints;
        this.xpos = xpos;
        this.ypos = ypos - 14;
        this.height = 10;
        this.width = 30;
        this.color = "white";
        this.drawingType = "square"
        this.drawingsList = drawingsList;
    }
    listForDrawing() {
        this.drawingsList[`hpBar${hpBarCounter++}`] = {
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