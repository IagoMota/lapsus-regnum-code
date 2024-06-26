import Animator from "./system/Animator.js";
import Goblin from "./entities/Goblin.js";
import Player from "./entities/Player.js";


const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext("2d");
const animator = new Animator(context);
const player = new Player()

for (let i = 0; i < 1000; i++) {
    const goblin = new Goblin(`goblin${i}`);
    
}

animator.startAnimationsLoop()
