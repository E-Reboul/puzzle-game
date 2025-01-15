import { Color } from "./Color.js";
import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class Movable extends Point {
    constructor(x = 0, y = 0, shape = Shape.CIRCLE, color = Color.NONE, z_index = 0) {
        super(x, y, shape, color, z_index);
        this._can_move = true;
    }
    can_move() {
        return this._can_move;
    }
    nextPos(dir) {
        return new Point(this.x + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT), this.y + Number(dir == Direction.DOWN) - Number(dir == Direction.UP));
    }
    moveTo(target) {
        if (!this._can_move)
            return;
        this.x = target.getX();
        this.y = target.getY();
    }
}
