import SpritesList from "./globalObjects/SpritesList.js";
import EnvironmentList from "./globalObjects/EnvironmentList.js";
import HpList from "./globalObjects/HpList.js";

class Collider {
    constructor() {
        this.playerPos = { ...SpritesList.player };
    }
    structureColisions() {
        const playerPos = { ...SpritesList.player };

        const spritesList = Object.entries(SpritesList);
        const structuresArray = Object.entries(EnvironmentList);
        structuresArray.forEach(structure => {
            const [strName, strPos] = structure;
            spritesList.forEach(sprite => {
                const [entName, entPos] = sprite;
                if (entPos.xpos < strPos.xpos + strPos.width &&
                    entPos.ypos < strPos.ypos + strPos.height &&
                    entPos.xpos + entPos.width > strPos.xpos &&
                    entPos.ypos + entPos.height > strPos.ypos) {
                    entPos.xpos -= entPos.width;
                    entPos.ypos -= entPos.height;
                }
            })
        })
    }
    getCollisions() {
        const playerPos = { ...SpritesList.player };

        const drawingsArray = Object.entries(SpritesList);
        const colliderList = drawingsArray.filter((keyValue) => {
            const [key, value] = keyValue;
            if (key !== "player") {
                return playerPos.xpos < value.xpos + value.width &&
                    playerPos.ypos < value.ypos + value.height &&
                    playerPos.xpos + playerPos.width > value.xpos &&
                    playerPos.ypos + playerPos.height > value.ypos;
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