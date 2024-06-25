class Collisions {
    constructor(drawingsList) {
        this.drawingsList = drawingsList;
    }

    getCollisions() {
        const playerPos ={ ...this.drawingsList.player };

        const drawingsArray = Object.entries(this.drawingsList);
        const collisionsList = drawingsArray.filter((keyValue) => {
            const [key, value] = keyValue;
            if (key !== "player") {               
                return playerPos.xpos < value.xpos + 30 &&
                   playerPos.xpos + 30 > value.xpos &&
                   playerPos.ypos < value.ypos + 30 &&
                   playerPos.ypos + 30 > value.ypos;
            }
        })
        return collisionsList;
    }
}

export default Collisions;