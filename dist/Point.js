import { Shape } from "./Shape.js";
export class Point {
    x;
    y;
    color;
    shape;
    size;
    z_index;
    static z_index = 1;
    constructor(x, y, color = 'blue', shape = Shape.DIAMOND, size = 1, zIndex = Point.z_index) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = shape;
        this.size = size;
        this.z_index = zIndex;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getColor() {
        return this.color;
    }
    getShape() {
        return this.shape;
    }
    getSize() {
        return this.size;
    }
    getZIndex() {
        return this.z_index;
    }
    setX(x) {
        this.x = x;
    }
    setColor(color) {
        this.color = color;
    }
    setY(y) {
        this.y = y;
    }
    setZIndex(z_index) {
        this.z_index = z_index;
    }
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
    isOn(p) {
        if (p != this && this.x === p.getX() && this.y === p.getY())
            return true;
        return false;
    }
    handle_draw(drawer) {
        drawer.drawRectangle(this.x, this.y, this.color, this.size);
    }
}
