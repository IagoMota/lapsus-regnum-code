import SpritesList from "./globalObjects/SpritesList.js";
import EnvironmentList from "./globalObjects/EnvironmentList.js";
import HpList from "./globalObjects/HpList.js";
import Collider from "./Collider.js";

class Animator {
    constructor(context) {
        this.context = context;
        this.collider = new Collider();
        this.backgroundImage = new Image()
        this.backgroundImage.src = "./entities/assets/bg.jpg";
    }

    startAnimationsLoop = () => {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.context.drawImage(this.backgroundImage, 0, 0, window.innerWidth, window.innerHeight);
        this.collider.getCollisions()
        this.collider.structureColisions()
        const drawingsArray = [...Object.values(EnvironmentList), ...Object.values(SpritesList), ...Object.values(HpList)]
        drawingsArray.forEach(drawingSettings => {
            
            if (drawingSettings.path) {
                const { xpos, ypos, width, height, sprite } = drawingSettings;

                this.context.drawImage(sprite, xpos, ypos, width, height)
                return
            }

            const { color, xpos, ypos, width, height } = drawingSettings;
            this.context.fillStyle = color;
            this.context.fillRect(xpos, ypos, width, height);
            console.log(drawingSettings)
        });

        requestAnimationFrame(this.startAnimationsLoop)
    }

}

export default Animator;