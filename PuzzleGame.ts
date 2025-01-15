import { Display } from "./Display.js";
import { Game } from "./Game.js";

const display: Display = new Display(50, 50, 10);
const game: Game = new Game(50, 50, 10);

game.update();