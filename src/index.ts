import Paddle from './paddle.js'
import InputHandler from './input.js'

let canvas = <HTMLCanvasElement> document.getElementById("gameScreen");

let ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT= 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle)

let lastTime: number = 0;

// images

let imgBall = <HTMLImageElement>document.getElementById('img_ball')!

function gameLoop(timeStamp: number) {

    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    // Clears the canvas after every frame
    ctx.clearRect(0, 0, 800, 600)
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ctx.drawImage(imgBall, 10, 10)

    requestAnimationFrame(gameLoop)

}

gameLoop()