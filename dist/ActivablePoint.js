import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class ActivablePoint extends Point {
    id;
    _is_active;
    static shape = Shape.CIRCLE;
    constructor(x, y, color, shape, size = 1) {
        super(x, y, color, shape, size);
        this.id = this.generateId();
        this._is_active = false;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
    activate() {
        return this._is_active = true;
    }
    deactivate() {
        return this._is_active = false;
    }
    isActivate() {
        return this._is_active;
    }
}
