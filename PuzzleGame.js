"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Display_js_1 = require("./Display.js");
var Game_js_1 = require("./Game.js");
var display = new Display_js_1.Display(50, 50, 10);
var game = new Game_js_1.Game(50, 50, 10);
game.update();
