class Collisions {
    constructor(spritesList) {
        this.spritesList = spritesList;
    }

    getCollisions() {
        const playerPos ={ ...this.spritesList.player };

        const drawingsArray = Object.entries(this.spritesList);
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