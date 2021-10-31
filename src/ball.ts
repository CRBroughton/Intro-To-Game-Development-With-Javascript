import Position from './interfaces/Position.js'

export default class Ball {
    image: HTMLImageElement
    speed: object
    position: Position;
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
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, 10, 10, 16, 16)
    }

    update(deltaTime) {

    }
}
