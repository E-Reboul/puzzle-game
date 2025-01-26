import { Display } from "./Display";
import { Drawer } from "./Drawer";
import { EndPlate } from "./EndPlate";
import { Game } from "./Game";
import { LevelData } from "./LevelData";
import { Player } from "./Player";
import { Point } from "./Point";
import { PressPlate } from "./PressPlate";
import { Wall } from "./Wall";

export class Level {

     protected player: Player;
     protected player2: Player;
     protected objects: Point[];
     protected isOver: boolean;
     protected count: number;

    constructor() {
        this.player = new Player(2, 50, 50, "jeanpierre", "blue");
        this.player2 = new Player(3, 50, 50, "jeanpierreV2", "red");
        this.objects = [this.player2];
        this.isOver = false;
        this.count = 0;
    }

    public getCount():number{
        return this.count;
    }

    public getIsOver():boolean{
        return this.isOver;
    }

    public getObjects():Point[]{
        return this.objects;
    }

    public async getLvl(): Promise<LevelData>{

        let levelNumber = this.count;
        const response = await fetch(`./level/level${levelNumber}.json`);

        if (!response.ok) {
            throw new Error("Failed to fetch level data");
        }
        return await response.json();
    }

    private getObstacle(point:Point):boolean{
        for(let obj of this.objects){
            if(obj.getPos().x == point.getPos().x && obj.getPos().y == point.getPos().y){
                return true;
            }
        }
        return false;
    }

    public getEmptyPoint(padding:number=0):Point{
        let x_pos : number;
        let y_pos : number;

        let empty_point : Point = new Point(0,0);

        do{
            x_pos = Math.round(Math.random()*(padding-1));
            y_pos = Math.round(Math.random()*(padding-1));
            empty_point.setPos(x_pos,y_pos);
        }while(this.getObstacle(empty_point));

        return empty_point;
    }

    public async setPlayerXPosition(player: Player): Promise<void> {
        const levelData = await this.getLvl();

        const [x] = levelData.PlayersStart[0];
        player.setPos(x, player.getPos().y);
    }

    public async setPlayerYPosition(player: Player): Promise<void> {
        const levelData = await this.getLvl();

        const [y] = levelData.PlayersStart[0];
        player.setPos(player.getPos().x, y);
    }

    public out_of_bounds(point:Point, game: Game):boolean{
        return point.getX()<0 || point.getX()>=game.getWidth() || point.getY()<0 || point.getY()>=game.getHeight();
    }

    public async createLevel(drawer: Drawer): Promise<void> {
        drawer.clear();

        await this.setPlayerXPosition(this.player);
        await this.setPlayerYPosition(this.player);
        await this.setPlayerXPosition(this.player2);
        await this.setPlayerYPosition(this.player2);

        this.objects.push(this.player, this.player2);

        const levelData = await this.getLvl();

        // Créer les murs
        for (const [x, y] of levelData.Walls) {
            this.objects.push(new Wall(x, y));
        }

        for (const [x, y] of levelData.PressurePlates) {
            this.objects.push(new PressPlate(0, x, y));
        }

        const [x, y] = levelData.EndPlates;
        this.objects.push(new EndPlate(0, x, y));
    }

}