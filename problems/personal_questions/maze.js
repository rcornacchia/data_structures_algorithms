const rows = 3;
const columns = 4;
const exitRow = 0;
const exitColumn = 3;
const maze = [[0, 1, 1, 0],
              [0, 1, 1, 0],
              [0, 0, 0, 0]];

class Point {
    constructor(x, y, predecessor) {
        this.x = x;
        this.y = y;
        this.path = 0;
        this.predecessor = predecessor || null;
    }
}

function solveMaze(maze, rows, columns, exitRow, exitColumn) {
    const start = new Point(0, 0);
    const queue = [start];
    maze[0][0] = 2;

    while (queue.length > 0) {
        const curr = queue.shift();
        queue.push(new Point(curr.x+1, curr.y, curr));
        queue.push(new Point(curr.x, curr.y + 1, curr));
        queue.push(new Point(curr.x-1, curr.y, curr));
        queue.push(new Point(curr.x-1, curr.y, curr));

        if (curr.x == exitRow && curr.y == exitColumn) {
            for (row in maze) {
                console.log(maze[row]);
            }
            let pred = curr.predecessor;
            let length = 0;

            while (pred != null) {
                console.log(pred);
                length += 1;
                pred = pred.predecessor;
            }
            return [curr.x, curr.y, length];
        }

        if (curr.x >= 0 && curr.x < rows && curr.y >= 0 && curr.y < columns && maze[curr.x][curr.y] == 0) {
            maze[curr.x][curr.y] = 2;
            queue.push(new Point(curr.x+1, curr.y));
        }
    }
    return -1;
}

console.log(solveMaze(maze, 3, 4, 0, 3));
