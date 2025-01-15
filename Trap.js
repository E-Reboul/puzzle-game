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
exports.Trap = void 0;
var Color_js_1 = require("./Color.js");
var Point_js_1 = require("./Point.js");
var Shape_js_1 = require("./Shape.js");
var Trap = /** @class */ (function (_super) {
    __extends(Trap, _super);
    function Trap(x, y) {
        var _this = _super.call(this, x, y, Shape_js_1.Shape.RECTANGLE, Trap.DESACTIVATED_TRAP_COLOR, Trap.TRAP_Z) || this;
        _this._activated = false;
        return _this;
    }
    Trap.prototype.can_walk_on = function () {
        return !this._activated;
    };
    Trap.prototype.enableWalk = function () {
        this._activated = false;
        this.color = Trap.DESACTIVATED_TRAP_COLOR;
    };
    Trap.prototype.disableWalk = function () {
        this._activated = true;
        this.color = Trap.ACTIVATED_TRAP_COLOR;
    };
    Trap.TRAP_Z = 1;
    Trap.DESACTIVATED_TRAP_COLOR = Color_js_1.Color.YELLOW;
    Trap.ACTIVATED_TRAP_COLOR = Color_js_1.Color.GREEN;
    return Trap;
}(Point_js_1.Point));
exports.Trap = Trap;
