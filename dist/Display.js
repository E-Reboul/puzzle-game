import { Drawer } from "./Drawer.js";
import { Shape } from "./Shape.js";
export class Display {
    constructor(width, height, scale) {
        this.drawer = new Drawer(width, height, scale);
    }
    draw_objects(obj, curr_z_index) {
        if (obj.getZIndex() != curr_z_index)
            return false;
        switch (obj.getShape()) {
            case Shape.CIRCLE:
                this.drawer.drawCircle(obj.getX(), obj.getY(), obj.getColor());
                break;
            case Shape.RECTANGLE:
                this.drawer.drawRectangle(obj.getX(), obj.getY(), obj.getColor());
                break;
            case Shape.DIAMOND:
                this.drawer.drawDiamond(obj.getX(), obj.getY(), obj.getColor());
            default:
                break;
        }
        return true;
    }
    draw(game) {
        this.drawer.clear();
        let z_index = 0;
        let objects = game.getObjects();
        let left_obj = [];
        while (objects.length) {
            for (let obj of objects) {
                if (!this.draw_objects(obj, z_index)) {
                    left_obj.push(obj);
                }
            }
            objects = left_obj;
            left_obj = [];
            z_index++;
        }
    }
}
