import { Plate } from "./Plate.js";

export class EndPlate extends Plate {
    
    protected static color: string = "purple";

    constructor(id: number, x: number, y: number) {
        super(id, x, y, EndPlate.color);
    }

    // public isOver(game: Game): boolean {
    //     const objects = game.getObjects();
    //     for (let obj of objects) {
    //         if (obj instanceof Player && !obj.isOn(this)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
}