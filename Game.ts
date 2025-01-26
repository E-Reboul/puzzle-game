import { Direction } from "./Direction";
import { Display } from "./Display.js";
import { Movable } from "./Movable";
import { Player } from "./Player.js";
import { Point } from "./Point.js";
import { Walkable } from "./Walkable.js";


function rand_int_in_range(min:number,max:number):number{
    return Math.round(Math.random()*(max-min)+min);
}

export class Game {
    
    protected display: Display;
    protected width: number;
    protected height: number;
    protected player: Player;
    protected player2: Player;
    protected objects: Point[];
    protected isOver: boolean;
    protected level: number;
    
    constructor() {
        this.display = new Display(800, 600, 1);
        this.width = 800;
        this.height = 600;
        this.player = new Player(2, 0, 0, "jeanpierre", "blue");
        this.player2 = new Player(3, this.width / 2, this.width / 2, "jeanpierreV2", "red");
        this.objects = [new Player(1, 0, 0, "jeanpierre", "green")];
        this.isOver = false;
        this.level = 1;
    }

    private initializeObjects(): void {
        // Ajoutez des objets au jeu
        this.objects.push(new Point(1, 1, "red"));
        // Ajoutez d'autres objets si nécessaire
    }
    
    public getObjects():Point[]{
        return this.objects;
    }

    public getLvl():number{
        return this.level;
    }

    protected isWalkable(obj:Point):boolean{
        if( "can_walk_on" in obj && !(obj as unknown as Walkable).can_walk_on()) return false;
        return true;
    }

    public getObstacle(point:Point):Point|undefined{
        for(let obj of this.objects){
            if(obj.isOn(point) && !this.isWalkable(obj)) return obj;
        }
        return undefined;
    }

    public out_of_bounds(point:Point):boolean{
        return point.getX()<0 || point.getX()>=this.width || point.getY()<0 || point.getY()>=this.height;
    }

    // protected updateDisplay():void{
    //     this.display.draw(this);
    // }

    // public run():void{
    //     this.createLevel();
    //     this.handleEvent();
    // }

    // protected handleEvent():void {
    //     document.addEventListener('keydown', (event) => {
    //       if (!this.isOver) {
    //         switch (event.key) {
    //           case "ArrowLeft":
    //             this.moveObject(this.player, Direction.LEFT);
    //             break;
    //           case "ArrowRight":
    //             this.moveObject(this.player, Direction.RIGHT);
    //             break;
    //           case "ArrowUp":
    //             this.moveObject(this.player, Direction.UP);
    //             break;
    //           case "ArrowDown":
    //             this.moveObject(this.player, Direction.DOWN);
    //             break;
    //         }
    //       }
    //     })
    //   }

    // public moveObject(obj:Movable,dir:Direction):boolean{

    //     if(!obj.can_move()) return false;

    //     let nextPos : Point = obj.nextPos(dir);

    //     if(this.out_of_bounds(nextPos)) return false;

    //     let obstacle : Point|undefined = this.getObstacle(nextPos);

    //     let doMove:boolean = false;
    
    //     if(obstacle == undefined){
    //         doMove = true;
    //     }

    //     else if (obstacle instanceof Movable){ // Allow any Movable to move Objects (pile of rocks)
    //         doMove = this.moveObject(obstacle, dir); 
    //     }

    //     if(doMove){
    //         obj.moveTo(nextPos);
    //         if(this.hasWon()){
    //             this.level++;
    //             this.createLevel();
    //         }
    //         else{
    //             this.updateDisplay();
    //         }
    //     }

    //     return doMove;
    // }

    // protected hasWon():boolean{

    //     for(let obj of this.objects){
    //         if(obj instanceof Hole && !obj.can_walk_on()) return false;
    //     }

    //     return true;
    // }
    // public createLevel():void{
    //     this.player = new Player(this.width/2,this.height/2);
    //     this.objects = [this.player];

    //     for(let i = 0; i<this.level; i++ ){
    //         let empty_point : Point = this.getEmptyPoint();
    //         this.objects.push(new Hole(empty_point.getX(),empty_point.getY()));
    //         empty_point = this.getEmptyPoint();
    //         this.objects.push(new Rock(empty_point.getX(),empty_point.getY()));
    //     } 

    //     this.updateDisplay();
    // }
}