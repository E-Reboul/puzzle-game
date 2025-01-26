import { Movable } from "./Movable.js";
import { Shape } from "./Shape.js";
export class Player extends Movable {
    id;
    nametag;
    static color = "black";
    static border_color = "gray";
    static default_name = "defaultPlayer";
    static shape = Shape.DIAMOND;
    static z_index = 3;
    constructor(id, x, y, nametag = Player.default_name, color = Player.color, size = 0.73) {
        super(x, y, color, Player.shape, size, Player.z_index);
        this.nametag = nametag;
        this.id = id;
    }
    getNameTag() {
        return this.nametag;
    }
    setNameTag(nametag) {
        this.nametag = nametag;
    }
    handle_draw(drawer) {
        drawer.drawCircle(this.getX(), this.getY(), this.getColor(), this.getSize());
        drawer.drawCircle(this.getX(), this.getY(), Player.border_color, this.getSize() - 0.2);
    }
}
