class Animator {
    constructor(drawingsList, context, collisions) {
        this.drawingsList = drawingsList;
        this.context = context;
        this.collisions = collisions;
    }

    startAnimationsLoop = () => {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        console.log(this.collisions.getCollisions())
        const drawingArray = Object.values(this.drawingsList)
        drawingArray.forEach(drawingSettings => {
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