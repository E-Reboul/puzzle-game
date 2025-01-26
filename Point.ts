import { Drawer } from "./Drawer.js";
import { Shape } from "./Shape.js";

export class Point {
    private x: number;
    private y: number;
    private color: string;
    private shape: Shape;
    private size: number;
    private z_index: number;

    protected static z_index: number = 1;
    
    constructor(x: number, y: number, color: string = 'blue', shape: Shape = Shape.DIAMOND, size: number = 1, zIndex: number = Point.z_index) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = shape;
        this.size = size;
        this.z_index = zIndex;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getColor(): string {
        return this.color;
    }

    public getShape(): Shape {
        return this.shape;
    }

    public getSize(): number {
        return this.size;
    }

    public getZIndex(): number {
        return this.z_index;
    }

    public getPos(): {x:number,y:number}{
        return {x:this.x,y:this.y};
    }

    public setX(x: number): void {
        this.x = x;
    }

    public setColor(color: string): void {
        this.color = color;
    }
    
    public setY(y: number): void {
        this.y = y;
    }

    public setZIndex(z_index: number): void {
        this.z_index = z_index;
    }
 
    public setPos(x:number,y:number):void{
        this.x = x;
        this.y = y;
      }

    public isOn(p: Point): boolean{
        if (p != this && this.x === p.getX() && this.y === p.getY()) return true;
        return false;
    }

    public handle_draw(drawer: Drawer): void {
        drawer.drawRectangle(this.x, this.y, this.color, this.size);
    }
}