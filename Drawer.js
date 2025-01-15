"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var Drawer = /** @class */ (function () {
    function Drawer(width, height, scale) {
        if (scale === void 0) { scale = 10; }
        this.scale = scale;
        var canvas = document.createElement('canvas');
        canvas.width = width * this.scale;
        canvas.height = height * this.scale;
        this.ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
    }
    Drawer.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    };
    Drawer.prototype.drawRectangle = function (x, y, color, size) {
        if (size === void 0) { size = 1; }
        this.ctx.beginPath();
        this.ctx.fillStyle = color.toString();
        var width = size * this.scale;
        this.ctx.fillRect(x * this.scale + ((this.scale - width) / 2), y * this.scale + ((this.scale - width) / 2), width, width);
    };
    Drawer.prototype.drawCircle = function (x, y, color, size) {
        if (size === void 0) { size = 1; }
        this.ctx.beginPath();
        this.ctx.fillStyle = color.toString();
        this.ctx.arc(x * this.scale + this.scale / 2, y * this.scale + this.scale / 2, (size * this.scale) / 2, 0, 2 * Math.PI);
        this.ctx.fill();
    };
    Drawer.prototype.drawDiamond = function (x, y, color, size) {
        if (size === void 0) { size = 1; }
        this.ctx.beginPath();
        this.ctx.fillStyle = color.toString();
        var halfSize = (size * this.scale) / 2;
        var topX = x * this.scale + this.scale / 2;
        var topY = y * this.scale;
        var rightX = x * this.scale + this.scale;
        var rightY = y * this.scale + halfSize;
        var bottomX = x * this.scale + this.scale / 2;
        var bottomY = y * this.scale + this.scale;
        var leftX = x * this.scale;
        var leftY = y * this.scale + halfSize;
        this.ctx.moveTo(topX, topY);
        this.ctx.lineTo(rightX, rightY);
        this.ctx.lineTo(bottomX, bottomY);
        this.ctx.lineTo(leftX, leftY);
        this.ctx.closePath();
        this.ctx.fill();
    };
    return Drawer;
}());
exports.Drawer = Drawer;
