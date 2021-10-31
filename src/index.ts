let canvas = <HTMLCanvasElement> document.getElementById("gameScreen");

let ctx = <CanvasRenderingContext2D> canvas.getContext("2d");

// Clears the canvas after every frame
ctx.clearRect(0, 0, 800, 600)