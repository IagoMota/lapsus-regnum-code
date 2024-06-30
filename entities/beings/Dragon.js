import HpBar from "../dependencies/HpBar.js";
import Sprite from "../dependencies/Sprite.js";
import Stats from "../dependencies/Stats.js";
import random from "../../system/testing/Random.js";

class Dragon {
    constructor(name = "Dragon", height = 10, width = 80, xpos = random.X(30), ypos = random.Y(30)) {
        this.stats = new Stats(name, 10, 3, 3)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos);
        this.sprite = new Sprite(name, null, "square", "pink", height, width, xpos, ypos);
    }
}

export default Dragon;