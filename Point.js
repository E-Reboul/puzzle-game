"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Color_js_1 = require("./Color.js");
var Shape_js_1 = require("./Shape.js");
var Point = /** @class */ (function () {
    function Point(x, y, shape, color, z_index) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (shape === void 0) { shape = Shape_js_1.Shape.CIRCLE; }
        if (color === void 0) { color = Color_js_1.Color.NONE; }
        if (z_index === void 0) { z_index = 0; }
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.color = color;
        this.z_index = z_index;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point.prototype.getShape = function () {
        return this.shape;
    };
    Point.prototype.getColor = function () {
        return this.color;
    };
    Point.prototype.getZIndex = function () {
        return this.z_index;
    };
    Point.prototype.isOn = function (point) {
        return point != this && point.getX() == this.getX() && point.getY() == this.getY();
    };
    return Point;
}());
exports.Point = Point;
