import { Drawer } from "./Drawer.js";
import { Game } from "./Game.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Display {

    protected drawer: Drawer;

    constructor(width: number, height: number, scale: number){
        this.drawer = new Drawer(width, height, scale);
    }

    public draw_objects(obj:Point,curr_z_index:number):boolean{
        if(obj.getZIndex()!=curr_z_index) return false;

        switch(obj.getShape()){
            case Shape.CIRCLE:
                this.drawer.drawCircle(obj.getX(),obj.getY(),obj.getColor(), obj.getSize());
                break;
            case Shape.SQUARE:
                this.drawer.drawRectangle(obj.getX(),obj.getY(),obj.getColor(), obj.getSize());
                break;
            case Shape.DIAMOND:
                this.drawer.drawDiamond(obj.getX(),obj.getY(),obj.getColor(), obj.getSize());
        }

        return true;
    }
    
    public draw(game: Game): void {
        this.drawer.clear();
    
        let z_index: number = 0;
        let objects: Point[] = game.getObjects();
        let left_obj: Point[] = [];
    
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