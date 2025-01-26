import { Display } from "./Display.js";
import { Game } from "./Game.js";
let display = new Display(10, 10, 1);
let game = new Game();
display.draw(game);
