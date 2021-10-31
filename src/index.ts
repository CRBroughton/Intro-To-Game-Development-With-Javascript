import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'

let canvas = <HTMLCanvasElement> document.getElementById("gameScreen");

let ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle)

let lastTime: number = 0;

function gameLoop(timeStamp: number) {

    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    // Clears the canvas after every frame
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx)

    requestAnimationFrame(gameLoop)

}

requestAnimationFrame(gameLoop)