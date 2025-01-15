"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Color_js_1 = require("./Color.js");
var Direction_js_1 = require("./Direction.js");
var Display_js_1 = require("./Display.js");
var Player_js_1 = require("./Player.js");
var Trap_js_1 = require("./Trap.js");
var Wall_js_1 = require("./Wall.js");
var Game = /** @class */ (function () {
    function Game(width, height, scale) {
        this.display = new Display_js_1.Display(width, height, scale);
        this.width = width;
        this.height = height;
        this.player1 = new Player_js_1.Player('Player one', width / 2, height / 2, Color_js_1.Color.RED);
        this.player2 = new Player_js_1.Player('Player two', width / 2 + 1, height / 2, Color_js_1.Color.BLUE);
        this.objects = [];
        this.level = 1;
        this.isOver = false;
    }
    Game.prototype.getLvl = function () {
        return this.level;
    };
    Game.prototype.getObjects = function () {
        return this.objects;
    };
    Game.prototype.getObstacles = function (p) {
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.isOn(p) && !this.isWalkable(obj)) {
                return obj;
            }
        }
        return undefined;
    };
    Game.prototype.isWalkable = function (obj) {
        if (obj instanceof Wall_js_1.Wall && !obj.can_walk_on())
            return false;
        return true;
    };
    Game.prototype.out_of_bounds = function (point) {
        return point.getX() < 0 || point.getX() >= this.width || point.getY() < 0 || point.getY() >= this.height;
    };
    Game.prototype.handleEvent = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'Z':
                    _this.moveObject(_this.player1, Direction_js_1.Direction.UP);
                    break;
                case 'S':
                    _this.moveObject(_this.player1, Direction_js_1.Direction.DOWN);
                    break;
                case 'Q':
                    _this.moveObject(_this.player1, Direction_js_1.Direction.LEFT);
                    break;
                case 'D':
                    _this.moveObject(_this.player1, Direction_js_1.Direction.RIGHT);
                    break;
                default:
                    break;
            }
        });
    };
    Game.prototype.moveObject = function (obj, direction) {
        if (!obj.can_move())
            return false;
        var new_pos = obj.nextPos(direction);
        if (this.out_of_bounds(new_pos))
            return false;
        var obstacle = this.getObstacles(new_pos);
        var doMove = false;
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
    };
    Game.prototype.createLevel = function () {
        this.objects.push(this.player1, this.player2);
        this.objects.push(new Trap_js_1.Trap(5, 5));
    };
    Game.prototype.update = function () {
        this.display.draw(this);
    };
    return Game;
}());
exports.Game = Game;
