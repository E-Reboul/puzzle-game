import { Display } from "./Display.js";
import { Game } from "./Game.js";

let display: Display = new Display(10, 10, 1);
let game: Game = new Game();

display.draw(game);