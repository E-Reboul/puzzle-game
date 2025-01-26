import { Drawer } from "./Drawer.js";
import { Point } from "./Point.js";

export class Wall extends Point {

    protected static color: string = "black";
    protected static border_color: string = "gray";
    protected static z_index: number = 2;

    constructor(x: number, y: number) {
        super(x, y, Wall.color, Wall.z_index);
    }

    public override handle_draw(drawer: Drawer): void {
        drawer.drawRectangle(this.getX(), this.getY(), this.getColor(), 1);
        drawer.drawRectangle(this.getX(), this.getY(), Wall.border_color, 0.8);
    }
}