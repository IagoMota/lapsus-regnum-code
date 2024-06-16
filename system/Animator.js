class Animator {
    constructor(drawingsList, context) {
        this.drawingsList = drawingsList;
        this.context = context;
    }

    startAnimationsLoop() {
        setInterval(() => {
            this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
            this.drawingsList.forEach(drawingSettings => {
                this.createDrawing(drawingSettings)
            });
        }, 1000);
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
        console.log(drawingSettings)
        const { color, xpos, ypos} = drawingSettings;
        this.context.fillStyle = color;
        this.context.fillRect(xpos, ypos, 10, 10);
    }
}

export default Animator;