import SpritesList from "../../system/globalObjects/SpritesList.js";

class Sprite {
    constructor(name = "sprite", path, drawingType = "square", color = "gray", height = 30, width = 30, xpos, ypos) {
        this.path = path;
        this.name = name;
        this.drawingType = drawingType;
        this.xpos = xpos;
        this.ypos = ypos;
        this.height = height;
        this.width = width;
        this.color = color;
        this.listForDrawing()
    }
    listForDrawing() {
        SpritesList[this.name] = {
            ...this
        }
        
    }
}
export default Sprite;