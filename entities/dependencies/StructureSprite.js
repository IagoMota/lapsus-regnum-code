import EnvironmentList from "../../system/globalObjects/EnvironmentList.js";

class StructureSprite {
    constructor(name = "StructureSprite", path, drawingType = "square", color = "gray", height = 30, width = 30, xpos, ypos) {
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
        EnvironmentList[this.name] = {
            ...this
        }
        
    }
}
export default StructureSprite;