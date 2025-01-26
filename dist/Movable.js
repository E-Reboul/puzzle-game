import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
export class Movable extends Point {
    _can_move;
    constructor(x = 0, y = 0, color = "brown", shape, size = 1, z_index) {
        super(x, y, color, shape, size, z_index);
        this._can_move = true;
    }
    can_move() {
        return this._can_move;
    }
    nextPos(dir) {
        return new Point(this.getX() + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT), this.getY() + Number(dir == Direction.DOWN) - Number(dir == Direction.UP));
    }
    moveTo(target) {
        if (!this._can_move)
            return;
        this.setX(target.getX());
        this.setY(target.getY());
    }
}
