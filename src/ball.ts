import Position from './interfaces/Position.js'
import Speed from './interfaces/Speed.js'
import { detectCollision } from './collisionDetection.js'


export default class Ball {
    image: HTMLImageElement;
    speed: Speed;
    position: Position;
    size: number;
    gameWidth: number;
    gameHeight: number;
    game: any;
    constructor(game: any) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.image = <HTMLImageElement>document.getElementById('img_ball')!

        this.position = <Position>{};
        this.speed = <Speed>{};

        this.game = game

        this.size = 16
        this.reset()
    }

    reset() {
        this.position = {
            x: 10,
            y: 400,
        }
        this.speed = {
            x: 2,
            y: -2,
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime: number) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }
        if(this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // bottom of the game / game over
        if (this.position.y + this.size > this.gameHeight) {
            this.game.lives--
            this.reset()
        }

        if(detectCollision(this, this.game.paddle)) {

            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}
