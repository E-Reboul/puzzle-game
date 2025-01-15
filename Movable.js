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
exports.Movable = void 0;
var Color_js_1 = require("./Color.js");
var Direction_js_1 = require("./Direction.js");
var Point_js_1 = require("./Point.js");
var Shape_js_1 = require("./Shape.js");
var Movable = /** @class */ (function (_super) {
    __extends(Movable, _super);
    function Movable(x, y, shape, color, z_index) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (shape === void 0) { shape = Shape_js_1.Shape.CIRCLE; }
        if (color === void 0) { color = Color_js_1.Color.NONE; }
        if (z_index === void 0) { z_index = 0; }
        var _this = _super.call(this, x, y, shape, color, z_index) || this;
        _this._can_move = true;
        return _this;
    }
    Movable.prototype.can_move = function () {
        return this._can_move;
    };
    Movable.prototype.nextPos = function (dir) {
        return new Point_js_1.Point(this.x + Number(dir == Direction_js_1.Direction.RIGHT) - Number(dir == Direction_js_1.Direction.LEFT), this.y + Number(dir == Direction_js_1.Direction.DOWN) - Number(dir == Direction_js_1.Direction.UP));
    };
    Movable.prototype.moveTo = function (target) {
        if (!this._can_move)
            return;
        this.x = target.getX();
        this.y = target.getY();
    };
    return Movable;
}(Point_js_1.Point));
exports.Movable = Movable;
