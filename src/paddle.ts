import { Position } from './interfaces/Position.js'

export default class Paddle {

    gameWidth: number;
    width: number;
    height: number;
    maxSpeed: number;
    speed: number;
    position: Position;
    
    constructor(gameWidth: number, gameHeight: number) {
        this.gameWidth = gameWidth;
        this.width = 150;
        this.height = 20;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#0f0'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime: number) {
        if(!deltaTime) return
        this.position.x += this.speed;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}