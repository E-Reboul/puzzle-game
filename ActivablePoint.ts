import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class ActivablePoint extends Point {

    private id: number;
    private _is_active: boolean;

    protected static shape: Shape = Shape.CIRCLE;

    constructor(x: number, y: number, color: string, shape: Shape, size: number = 1) {
        super(x, y, color, shape, size);
        this.id = this.generateId();
        this._is_active = false;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public generateId(): number {
        return Math.floor(Math.random() * 1000);
    }

    protected activate(): boolean {
        return this._is_active = true;
    }

    protected deactivate(): boolean {
        return this._is_active = false;
    }

    protected isActivate(): boolean {
        return this._is_active;
    }
}