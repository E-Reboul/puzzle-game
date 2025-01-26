import { Plate } from "./Plate.js";
export class EndPlate extends Plate {
    static color = "purple";
    constructor(id, x, y) {
        super(id, x, y, EndPlate.color);
    }
}
