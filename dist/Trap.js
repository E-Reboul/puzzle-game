import { Color } from "./Color.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class Trap extends Point {
    constructor(x, y) {
        super(x, y, Shape.RECTANGLE, Trap.DESACTIVATED_TRAP_COLOR, Trap.TRAP_Z);
        this._activated = false;
    }
    can_walk_on() {
        return !this._activated;
    }
    enableWalk() {
        this._activated = false;
        this.color = Trap.DESACTIVATED_TRAP_COLOR;
    }
    disableWalk() {
        this._activated = true;
        this.color = Trap.ACTIVATED_TRAP_COLOR;
    }
}
Trap.TRAP_Z = 1;
Trap.DESACTIVATED_TRAP_COLOR = Color.YELLOW;
Trap.ACTIVATED_TRAP_COLOR = Color.GREEN;
