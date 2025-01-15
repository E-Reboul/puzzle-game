import { Display } from "./Display.js";
import { Game } from "./Game.js";
const display = new Display(50, 50, 10);
const game = new Game(50, 50, 10);
game.update();
