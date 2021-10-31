import Game from './game.js'

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = <HTMLCanvasElement> document.getElementById("gameScreen");
let ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
let lastTime: number = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timeStamp: number) {

    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    // Clears the canvas after every frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop)

}

requestAnimationFrame(gameLoop)