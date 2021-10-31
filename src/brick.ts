export default class Brick {
    image: HTMLImageElement;
    game: any;
    width: number;
    height: number;
    position: object;
    constructor(game: any, position: object) {
            this.image = <HTMLImageElement>document.getElementById('img_brick')!
    
            this.game = game
    
            this.position = position
            this.width = 80
            this.height = 24
    }

    update() {

    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}