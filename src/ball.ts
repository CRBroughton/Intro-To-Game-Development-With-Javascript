import Position from './interfaces/Position.js'
import Speed from './interfaces/Speed.js'


export default class Ball {
    image: HTMLImageElement;
    speed: Speed;
    position: Position;
    size: number;
    constructor() {
        this.image = <HTMLImageElement>document.getElementById('img_ball')!
        this.position = {
            x: 10,
            y: 10,
        }
        this.speed = {
            x: 2,
            y: 2,
        }
        this.size = 16
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}
