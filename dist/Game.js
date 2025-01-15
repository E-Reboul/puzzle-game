import { Color } from "./Color.js";
import { Direction } from "./Direction.js";
import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Trap } from "./Trap.js";
import { Wall } from "./Wall.js";
export class Game {
    constructor(width, height, scale) {
        this.display = new Display(width, height, scale);
        this.width = width;
        this.height = height;
        this.player1 = new Player('Player one', width / 2, height / 2, Color.RED);
        this.player2 = new Player('Player two', width / 2 + 1, height / 2, Color.BLUE);
        this.objects = [];
        this.level = 1;
        this.isOver = false;
    }
    getLvl() {
        return this.level;
    }
    getObjects() {
        return this.objects;
    }
    getObstacles(p) {
        for (let obj of this.objects) {
            if (obj.isOn(p) && !this.isWalkable(obj)) {
                return obj;
            }
        }
        return undefined;
    }
    isWalkable(obj) {
        if (obj instanceof Wall && !obj.can_walk_on())
            return false;
        return true;
    }
    out_of_bounds(point) {
        return point.getX() < 0 || point.getX() >= this.width || point.getY() < 0 || point.getY() >= this.height;
    }
    handleEvent() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'Z':
                    this.moveObject(this.player1, Direction.UP);
                    break;
                case 'S':
                    this.moveObject(this.player1, Direction.DOWN);
                    break;
                case 'Q':
                    this.moveObject(this.player1, Direction.LEFT);
                    break;
                case 'D':
                    this.moveObject(this.player1, Direction.RIGHT);
                    break;
                default:
                    break;
            }
        });
    }
    moveObject(obj, direction) {
        if (!obj.can_move())
            return false;
        let new_pos = obj.nextPos(direction);
        if (this.out_of_bounds(new_pos))
            return false;
        let obstacle = this.getObstacles(new_pos);
        let doMove = false;
        if (obstacle === undefined) {
            doMove = true;
        }
        // else if (obstacle instanceof Movable) {
        // }
        if (doMove) {
            obj.moveTo(new_pos);
        }
        else {
            //update display
        }
        return doMove;
    }
    createLevel() {
        this.objects.push(this.player1, this.player2);
        this.objects.push(new Trap(5, 5));
    }
    update() {
        this.display.draw(this);
    }
}
