import { Plate } from "./Plate.js";
export class PressPlate extends Plate {
    static color = "yellow";
    constructor(id, x, y) {
        super(id, x, y, PressPlate.color);
    }
    activate() {
        this.setColor("green");
        return super.activate();
    }
}
