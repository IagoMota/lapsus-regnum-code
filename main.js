import SpritesList from "./system/SpritesList.js"
import Animator from "./system/Animator.js"
import Collisions from "./system/Collisions.js"
import Player from "./entities/Player.js"
import Goblin from "./entities/Goblin.js"

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const spritesList = SpritesList;
const collisions = new Collisions(spritesList);
const animator = new Animator(spritesList, context, collisions);

const player = new Player(10, 10, "purple", "square", spritesList)

for (let i = 0; i < 20; i++) {
    new Goblin(Math.floor(Math.random() * (window.innerWidth - 50)), Math.floor(Math.random() * (window.innerHeight - 200)), "green", "square", spritesList, i)
}

animator.startAnimationsLoop()