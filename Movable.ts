import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Movable extends Point {

    protected _can_move: boolean;

    constructor(x: number = 0, y: number = 0, color: string = "brown", shape: Shape, size: number = 1, z_index: number) {
        super(x, y, color, shape, size, z_index);
        this._can_move = true;
    }

    public can_move(): boolean {
        return this._can_move;
    }

    public nextPos(dir: Direction): Point {
        return new Point(
            this.getX() + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT),
            this.getY() + Number(dir == Direction.DOWN) - Number(dir == Direction.UP)
        )   
    }

    public moveTo(target:Point):void{
        if(!this._can_move) return;
        this.setX(target.getX());
        this.setY(target.getY());
    }
}