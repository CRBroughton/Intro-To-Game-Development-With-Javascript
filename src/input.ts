import paddle from "./paddle";

export default class InputHandler {
    constructor(paddle: paddle, game: any) {
        document.addEventListener('keydown', event => {
            switch(event.code) {
                case "KeyA":
                    paddle.moveLeft()
                    break;
                case "ArrowLeft":
                    paddle.moveLeft()
                    break;
                case "KeyD":
                    paddle.moveRight()
                    break;
                case "ArrowRight":
                    paddle.moveRight()
                    break;
                case "Escape":
                    game.togglePause()
                    break;
                case "Space":
                    game.start()
                    break;
            }
        })

        document.addEventListener('keyup', event => {
            switch(event.code) {
                case "KeyA":
                    if(paddle.speed < 0)
                        paddle.stop()
                    break;
                case "ArrowLeft":
                    if(paddle.speed < 0)
                        paddle.stop()
                    break;
                case "KeyD":
                    if(paddle.speed > 0)
                        paddle.stop()
                    break;
                case "ArrowRight":
                    if(paddle.speed > 0)
                        paddle.stop()
                    break;
            }
        })
    }
}