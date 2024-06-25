import DrawingsList from "./system/DrawingsList.js"
import Animator from "./system/Animator.js"
import Collisions from "./system/Collisions.js"
import Player from "./entities/Player.js"
import Goblin from "./entities/Goblin.js"

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawingsList = DrawingsList;
const collisions = new Collisions(drawingsList);
const animator = new Animator(drawingsList, context, collisions);

const player = new Player(10, 10, "purple", "square", drawingsList)

for (let i = 0; i < 20; i++) {
    new Goblin(Math.floor(Math.random() * (window.innerWidth - 50)), Math.floor(Math.random() * (window.innerHeight - 200)), "green", "square", drawingsList, i)
}

animator.startAnimationsLoop()