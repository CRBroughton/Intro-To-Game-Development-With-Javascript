import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'

import { buildLevel, level1 } from './levels.js'


export default class Game {
    gameWidth: number;
    gameHeight: number;
    paddle!: Paddle;
    ball!: Ball;
    gameObjects: (Paddle | Ball | Brick) [] = [];
    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1)

        this.gameObjects = [
            this.ball,
            this.paddle,
           ...bricks
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
