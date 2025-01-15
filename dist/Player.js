import { Movable } from "./Movable.js";
import { Shape } from "./Shape.js";
export class Player extends Movable {
    constructor(name, x, y, color, z_index = 3) {
        super(x, y, Shape.CIRCLE, color, z_index);
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
