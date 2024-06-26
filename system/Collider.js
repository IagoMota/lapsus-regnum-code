import SpritesList from "./globalObjects/SpritesList.js";
import HpList from "./globalObjects/HpList.js";

class Collider {
    constructor() {

    }

    getCollisions() {
        const playerPos = { ...SpritesList.player };

        const drawingsArray = Object.entries(SpritesList);
        const colliderList = drawingsArray.filter((keyValue) => {
            const [key, value] = keyValue;
            if (key !== "player") {
                return playerPos.xpos < value.xpos + 30 &&
                    playerPos.xpos + 30 > value.xpos &&
                    playerPos.ypos < value.ypos + 30 &&
                    playerPos.ypos + 30 > value.ypos;
            }
        })
        colliderList.forEach(collision => {
            delete SpritesList[collision[0]];
            delete HpList[collision[0]];
        })
        return colliderList;
    }
}

export default Collider;