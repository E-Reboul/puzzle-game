import { Point } from "./Point.js";
export class Wall extends Point {
    static color = "black";
    static border_color = "gray";
    static z_index = 2;
    constructor(x, y) {
        super(x, y, Wall.color, Wall.z_index);
    }
    handle_draw(drawer) {
        drawer.drawRectangle(this.getX(), this.getY(), this.getColor(), 1);
        drawer.drawRectangle(this.getX(), this.getY(), Wall.border_color, 0.8);
    }
}
