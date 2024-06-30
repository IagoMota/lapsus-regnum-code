import Animator from "./system/Animator.js";
import Goblin from "./entities/beings/Goblin.js";
import Dragon from "./entities/beings/Dragon.js";
import House from "./entities/structures/House.js";
import Player from "./entities/beings/Player.js";


const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext("2d");
const animator = new Animator(context);
const player = new Player()
for (let i = 0; i < 5; i++) {
    new Goblin(`goblin${i}`);
    // new Dragon(`dragon${i}`);
}
animator.startAnimationsLoop()