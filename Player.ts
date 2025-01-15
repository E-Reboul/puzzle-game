import { Color } from "./Color.js";
import { Movable } from "./Movable.js";
import { Shape } from "./Shape.js";

export class Player extends Movable {

    protected name: string;

    constructor(name: string, x: number, y: number, color: Color, z_index: number = 3) {
        super(x, y, Shape.CIRCLE, color, z_index);
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}