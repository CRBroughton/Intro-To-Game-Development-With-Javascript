import Ball from './ball.js'
import GameObject from './interfaces/GameObject'

export function detectCollision(ball: Ball, gameObject: GameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if(bottomOfBall >= topOfObject 
        && topOfBall <= bottomOfObject 
        && ball.position.x >= leftSideOfObject
        && ball.position.x + ball.size <= rightSideOfObject) {
        return true
    } else {
        return false
    }
}