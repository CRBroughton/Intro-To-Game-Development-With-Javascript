import { Position } from './interfaces/Position.js'

export default class Paddle {

    width: number;
    height: number;
    position: Position;
    
    constructor(gameWidth: number, gameHeight: number) {
        this.width = 150;
        this.height = 20;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    draw(ctx: { fillRect: (arg0: number, arg1: number, arg2: number, arg3: number) => void; }) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}