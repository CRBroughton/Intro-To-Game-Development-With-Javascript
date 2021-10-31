export default class InputHandler {
    constructor() {
        document.addEventListener('keydown', event => {
            console.log(event.code)

            switch(event.code) {
                case "KeyA":
                    console.log('left')
                    break;
                case "ArrowLeft":
                    console.log('left')
                    break;
                case "KeyD":
                    console.log('right')
                    break;
                case "ArrowRight":
                    console.log('right')
                    break;
            }
        })
    }
}