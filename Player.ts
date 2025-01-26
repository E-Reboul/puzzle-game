import { Drawer } from "./Drawer.js";
import { Movable } from "./Movable.js";
import { Shape } from "./Shape.js";

export class Player extends Movable{

    private id: number;
    private nametag: string;

    protected static color: string = "black";
    protected static border_color: string = "gray";
    protected static default_name: string = "defaultPlayer";
    protected static shape: Shape = Shape.DIAMOND;
    protected static z_index: number = 3;

    constructor (id: number, x: number, y: number, nametag: string = Player.default_name, color: string = Player.color, size: number = 0.73) {
        super(x, y, color, Player.shape, size, Player.z_index);
        this.nametag = nametag;
        this.id = id;
    }

    public getNameTag(): string {
        return this.nametag;
    }

    public setNameTag(nametag: string): void {
        this.nametag = nametag;
    }

    public override handle_draw(drawer: Drawer): void {
        drawer.drawCircle(this.getX(), this.getY(), this.getColor(), this.getSize());
        drawer.drawCircle(this.getX(), this.getY(), Player.border_color, this.getSize() - 0.2);
    }

    // public activate(): boolean {
    //     return this._is_active = true;
    // }

    // public deactivate(): boolean {
    //     return this._is_active = false;
    // }

    // public isActivate(): boolean {
    //     return this._is_active;
    // }
}


