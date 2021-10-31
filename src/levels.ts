import Brick from './brick.js'

export function buildLevel(game: any, level: number[][]) {
    let bricks: Brick[] = []

    level.forEach((row: number[], rowIndex: number) => {
        row.forEach((brick: number, brickIndex: number) => {
            if(brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 20 + 24 * rowIndex,
                }
                bricks.push(new Brick(game, position))
            }
        })
    })

    return bricks;
}

export const level1 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]