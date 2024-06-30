import StructureSprite from "../dependencies/StructureSprite.js";
import Stats from "../dependencies/Stats.js";

class House {
    constructor(name = "House", height = 80, width = 80, xpos = 500, ypos = 250) {
        this.stats = new Stats(name, 100, 3, 3)
        this.structureSprite = new StructureSprite(name, null, "square", "brown", height, width, xpos, ypos);
        
    }
}

export default House;