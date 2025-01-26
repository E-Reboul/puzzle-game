import { Plate } from "./Plate.js";

export class PressPlate extends Plate {

    protected static color: string = "yellow";

    constructor(id: number, x: number, y: number) {
        super(id, x, y, PressPlate.color);
    }

    public override activate(): boolean {
        this.setColor("green");
        return super.activate();
    }

}