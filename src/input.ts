export default class InputHandler {
    constructor(paddle: { moveLeft: () => void; moveRight: () => void; }) {
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
            }
        })
    }
}