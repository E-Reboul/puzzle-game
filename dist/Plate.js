import { ActivablePoint } from "./ActivablePoint.js";
import { Shape } from "./Shape.js";
export class Plate extends ActivablePoint {
    static color = "yellow";
    static border_color = "gray";
    static shape = Shape.CIRCLE;
    constructor(id, x, y, color, shape = Plate.shape, size = 1) {
        super(x, y, color, shape, size);
    }
    handle_draw(drawer) {
        drawer.drawDiamond(this.getX(), this.getY(), this.getColor(), this.getSize());
        drawer.drawDiamond(this.getX(), this.getY(), Plate.border_color, 0.8);
    }
    can_walk_on() {
        return this.isActivate();
    }
    enableWalking() {
        this.activate();
    }
    disableWalking() {
        this.deactivate();
    }
}
