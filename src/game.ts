import Paddle from './paddle.js'
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'

import { buildLevel, level1, level2 } from './levels.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
}


export default class Game {
    gamestate: number;
    gameWidth: number;
    gameHeight: number;
    paddle!: Paddle;
    ball!: Ball;
    lives: number;
    levels: number[][][];
    currentLevel: number;
    gameObjects: (Paddle | Ball | Brick | markedForDeletion) [] = [];
    bricks: Brick[] = [];
    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects = [];
        this.bricks = [];
        this.levels = [level1, level2]
        this.currentLevel = 0
        this.lives = 3;

        new InputHandler(this.paddle, this)

    }

    start() {
        if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return
        this.bricks = buildLevel(this, this.levels[this.currentLevel])
        this.ball.reset()
        this.gameObjects = [
            this.ball,
            this.paddle,
        ]

        this.gamestate = GAMESTATE.RUNNING
    }

    update(deltaTime: number) {

        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER

        if(this.gamestate === GAMESTATE.PAUSED ||
           this.gamestate === GAMESTATE.MENU ||
           this.gamestate === GAMESTATE.GAMEOVER)
            return;

        if(this.bricks.length === 0) {
            this.currentLevel++
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }

        [...this.gameObjects, ...this.bricks].forEach(brick => brick.update(deltaTime));

        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion)
    }

    draw(ctx: CanvasRenderingContext2D) {
        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));

        if(this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,0.3)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
        }

        if(this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("Press SPACEBAR To Start", this.gameWidth / 2, this.gameHeight / 2)
        }

        if(this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = "white"
            ctx.textAlign = "center"
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
        }
    }

    togglePause() {
        if(this.gamestate == GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}
