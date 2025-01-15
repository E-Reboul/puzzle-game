"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
var Drawer_js_1 = require("./Drawer.js");
var Shape_js_1 = require("./Shape.js");
var Display = /** @class */ (function () {
    function Display(width, height, scale) {
        this.drawer = new Drawer_js_1.Drawer(width, height, scale);
    }
    Display.prototype.draw_objects = function (obj, curr_z_index) {
        if (obj.getZIndex() != curr_z_index)
            return false;
        switch (obj.getShape()) {
            case Shape_js_1.Shape.CIRCLE:
                this.drawer.drawCircle(obj.getX(), obj.getY(), obj.getColor());
                break;
            case Shape_js_1.Shape.RECTANGLE:
                this.drawer.drawRectangle(obj.getX(), obj.getY(), obj.getColor());
                break;
            case Shape_js_1.Shape.DIAMOND:
                this.drawer.drawDiamond(obj.getX(), obj.getY(), obj.getColor());
            default:
                break;
        }
        return true;
    };
    Display.prototype.draw = function (game) {
        this.drawer.clear();
        var z_index = 0;
        var objects = game.getObjects();
        var left_obj = [];
        while (objects.length) {
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var obj = objects_1[_i];
                if (!this.draw_objects(obj, z_index)) {
                    left_obj.push(obj);
                }
            }
            objects = left_obj;
            left_obj = [];
            z_index++;
        }
    };
    return Display;
}());
exports.Display = Display;
