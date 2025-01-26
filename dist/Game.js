import { Display } from "./Display.js";
import { Player } from "./Player.js";
import { Point } from "./Point.js";
function rand_int_in_range(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
export class Game {
    display;
    width;
    height;
    player;
    player2;
    objects;
    isOver;
    level;
    constructor() {
        this.display = new Display(800, 600, 1);
        this.width = 800;
        this.height = 600;
        this.player = new Player(2, 0, 0, "jeanpierre", "blue");
        this.player2 = new Player(3, this.width / 2, this.width / 2, "jeanpierreV2", "red");
        this.objects = [this.player2];
        this.isOver = false;
        this.level = 1;
    }
    initializeObjects() {
        // Ajoutez des objets au jeu
        this.objects.push(new Point(1, 1, "red"));
        // Ajoutez d'autres objets si nécessaire
    }
    getObjects() {
        return this.objects;
    }
    getLvl() {
        return this.level;
    }
    getEmptyPoint(padding = 0) {
        let x_pos;
        let y_pos;
        let empty_point = new Point(0, 0);
        do {
            x_pos = rand_int_in_range(padding, this.width - 1);
            y_pos = rand_int_in_range(padding, this.height - 1);
            empty_point.setPos(x_pos, y_pos);
        } while (this.getObstacle(empty_point));
        return empty_point;
    }
    isWalkable(obj) {
        if ("can_walk_on" in obj && !obj.can_walk_on())
            return false;
        return true;
    }
    getObstacle(point) {
        for (let obj of this.objects) {
            if (obj.isOn(point) && !this.isWalkable(obj))
                return obj;
        }
        return undefined;
    }
    out_of_bounds(point) {
        return point.getX() < 0 || point.getX() >= this.width || point.getY() < 0 || point.getY() >= this.height;
    }
}
