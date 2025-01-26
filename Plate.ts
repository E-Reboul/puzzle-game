import { ActivablePoint } from "./ActivablePoint.js";
import { Drawer } from "./Drawer.js";
import { Shape } from "./Shape.js";
import { Walkable } from "./Walkable.js";

export class Plate extends ActivablePoint implements Walkable {
    
    protected static color: string = "yellow";
    protected static border_color: string = "gray";
    protected static shape: Shape = Shape.CIRCLE;

    constructor(id: number, x: number, y: number, color: string, shape: Shape = Plate.shape, size: number = 1) {
        super(x, y, color, shape, size);
    }

    public override handle_draw(drawer: Drawer): void {
        drawer.drawDiamond(this.getX(), this.getY(), this.getColor(), this.getSize());
        drawer.drawDiamond(this.getX(), this.getY(), Plate.border_color, 0.8);
    }

    public can_walk_on(): boolean {
        return this.isActivate();
    }

    public enableWalking(): void {
        this.activate();
    }

    public disableWalking(): void {
        this.deactivate();
    }
}