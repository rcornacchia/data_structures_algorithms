const rows = 3;
const columns = 4;
const exitRow = 0;
const exitColumn = 3;
const maze = [[0, 1, 1, 0],
              [0, 1, 1, 0],
              [0, 0, 0, 0]];

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.path = 0;
    }
}

function solveMaze(maze, rows, columns, exitRow, exitColumn) {
    const start = new Point(0, 0);
    console.log(start);
}

solveMaze(maze, 3, 4, 0, 3); // return
