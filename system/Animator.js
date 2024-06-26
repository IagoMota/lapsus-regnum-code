import SpritesList from "./globalObjects/SpritesList.js";
import HpList from "./globalObjects/HpList.js";
import Collider from "./Collider.js";

class Animator {
    constructor(context) {
        this.context = context;
        this.collider = new Collider();
    }

    startAnimationsLoop = () => {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        console.log(this.collider.getCollisions())
        const drawingsArray = [...Object.values(SpritesList), ...Object.values(HpList)]
        drawingsArray.forEach((drawingSettings, index) => {
            this.createDrawing(drawingSettings)
        });
        requestAnimationFrame(this.startAnimationsLoop)
    }
    createDrawing(drawingSettings) {
        switch (drawingSettings.drawingType) {
            case "arc":
                this.createCircle(drawingSettings)
                break;
            case "square":
                this.createSquare(drawingSettings)
                break;
            case "stroke":
                this.createStroke(drawingSettings)
                break;
        }
    }
    createCircle() { }
    createSquare(drawingSettings) {
        const { color, xpos, ypos, width, height } = drawingSettings;
        this.context.fillStyle = color;
        this.context.fillRect(xpos, ypos, width, height);
    }

}

export default Animator;