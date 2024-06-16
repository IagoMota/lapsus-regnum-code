import DrawingsList from "./system/DrawingsList.js"
import Animator from "./system/Animator.js"
import Player from "./entities/Player.js"

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drawingsList = DrawingsList;
const player = new Player(200, 200, "red", "square", drawingsList)
const animator = new Animator(drawingsList, context);

animator.startAnimationsLoop()