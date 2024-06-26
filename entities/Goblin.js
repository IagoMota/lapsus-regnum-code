import HpBar from "./dependencies/HpBar.js";
import Sprite from "./dependencies/Sprite.js";
import Stats from "./dependencies/Stats.js";
import random from "../system/testing/Random.js";

class Goblin {
    constructor(name = "goblin", height = 30, width = 30, xpos = random.X(30), ypos = random.Y(30)) {
        this.stats = new Stats(name, 10, 3, 3)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos);
        this.sprite = new Sprite(name, null, "square", "green", 30, 30, xpos, ypos);
    }
}

export default Goblin;