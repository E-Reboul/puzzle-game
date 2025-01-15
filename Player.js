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
exports.Player = void 0;
var Movable_js_1 = require("./Movable.js");
var Shape_js_1 = require("./Shape.js");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, x, y, color, z_index) {
        if (z_index === void 0) { z_index = 3; }
        var _this = _super.call(this, x, y, Shape_js_1.Shape.CIRCLE, color, z_index) || this;
        _this.name = name;
        return _this;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    return Player;
}(Movable_js_1.Movable));
exports.Player = Player;
