import Position from './interfaces/Position.js'

export default class Ball {
    image: HTMLImageElement
    constructor() {
        this.image = <HTMLImageElement>document.getElementById('img_ball')!
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, 10, 10, 16, 16)
    }

    update() {}
}
