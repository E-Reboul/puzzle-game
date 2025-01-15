import { Color } from "./Color.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
import { Walkable } from "./Walkable.js";

export class Wall extends Point implements Walkable {

    protected static WALL_Z: number = 2;

    constructor(x: number, y: number, shape: Shape = Shape.RECTANGLE, color: Color = Color.GRAY, z_index: number = Wall.WALL_Z) {
        super(x, y, shape, color, z_index);
    }

    public can_walk_on(): boolean {
        return false;
    }

    public enableWalk() {}

    public disableWalk(){}
}