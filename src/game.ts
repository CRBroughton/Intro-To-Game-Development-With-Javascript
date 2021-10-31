import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'


export default class Game {
    gameWidth: number;
    gameHeight: number;
    paddle!: Paddle;
    ball!: Ball;
    gameObjects: (Paddle | Ball) [] = [];
    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let brick = new Brick(this, {x: 20, y: 20})

        this.gameObjects = [
            this.ball,
            this.paddle,
            brick
        ]
        new InputHandler(this.paddle)
    }

    update(deltaTime: number) {
        this.gameObjects.forEach(object => object.update(deltaTime));
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.gameObjects.forEach(object => object.draw(ctx));
    }
}
