import HpBar from "../dependencies/HpBar.js";
import Sprite from "../dependencies/Sprite.js";
import Stats from "../dependencies/Stats.js";
import random from "../../system/testing/Random.js";

class Goblin {
    constructor(name = "goblin", height = 50, width = 50, xpos = random.X(30), ypos = random.Y(30)) {
        this.stats = new Stats(name, 10, 3, 3)
        this.hpBar = new HpBar(name, this.stats.health, xpos, ypos, width);
        this.sprite = new Sprite(name, "./entities/assets/goblin.png", height, width, xpos, ypos);
    }
}

export default Goblin;