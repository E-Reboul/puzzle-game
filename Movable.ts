import { Color } from "./Color.js";
import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Movable extends Point {

    protected _can_move: boolean;

    constructor(x: number = 0, y: number = 0, shape: Shape = Shape.CIRCLE, color: Color = Color.NONE, z_index = 0) {
        super(x, y, shape, color, z_index);
        this._can_move = true;
    }

    public can_move(): boolean {
        return this._can_move;
    }

    public nextPos(dir: Direction): Point {
        return new Point(
            this.x + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT),
            this.y + Number(dir == Direction.DOWN) - Number(dir == Direction.UP)
        )   
    }

    public moveTo(target:Point):void{
        if(!this._can_move) return;
        this.x = target.getX();
        this.y = target.getY();
    }
}