"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
var Color_js_1 = require("./Color.js");
var Point_js_1 = require("./Point.js");
var Shape_js_1 = require("./Shape.js");
var Wall = /** @class */ (function (_super) {
    __extends(Wall, _super);
    function Wall(x, y, shape, color, z_index) {
        if (shape === void 0) { shape = Shape_js_1.Shape.RECTANGLE; }
        if (color === void 0) { color = Color_js_1.Color.GRAY; }
        if (z_index === void 0) { z_index = Wall.WALL_Z; }
        return _super.call(this, x, y, shape, color, z_index) || this;
    }
    Wall.prototype.can_walk_on = function () {
        return false;
    };
    Wall.prototype.enableWalk = function () { };
    Wall.prototype.disableWalk = function () { };
    Wall.WALL_Z = 2;
    return Wall;
}(Point_js_1.Point));
exports.Wall = Wall;
