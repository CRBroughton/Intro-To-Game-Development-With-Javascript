let canvas = <HTMLCanvasElement> document.getElementById("gameScreen");

let ctx = <CanvasRenderingContext2D> canvas.getContext("2d");


ctx.fillStyle = <string> '#f00';
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = <string> '#00f';
ctx.fillRect(200, 200, 50, 50);