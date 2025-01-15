import { Color } from "./Color.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class Wall extends Point {
    constructor(x, y, shape = Shape.RECTANGLE, color = Color.GRAY, z_index = Wall.WALL_Z) {
        super(x, y, shape, color, z_index);
    }
    can_walk_on() {
        return false;
    }
    enableWalk() { }
    disableWalk() { }
}
Wall.WALL_Z = 2;
