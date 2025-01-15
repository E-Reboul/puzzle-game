import { Color } from "./Color.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
import { Walkable } from "./Walkable.js";

export class Trap extends Point implements Walkable {

    protected static TRAP_Z : number = 1;
    protected static DESACTIVATED_TRAP_COLOR: Color = Color.YELLOW;
    protected static ACTIVATED_TRAP_COLOR: Color = Color.GREEN;

    protected _activated: boolean;

    constructor(x: number, y: number) {
        super(x, y, Shape.RECTANGLE, Trap.DESACTIVATED_TRAP_COLOR, Trap.TRAP_Z);
        this._activated = false;
    }

    public can_walk_on(): boolean {
        return !this._activated;
    }

    public enableWalk(): void {
        this._activated = false;
        this.color = Trap.DESACTIVATED_TRAP_COLOR;
    }

    public disableWalk(): void {
        this._activated = true;
        this.color = Trap.ACTIVATED_TRAP_COLOR
    }
}