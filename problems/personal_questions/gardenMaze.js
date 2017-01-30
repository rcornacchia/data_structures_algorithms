function getCarrots(garden) {
    var carrots = 0;    // initialize carrot counter
    var start;          // initialize variable to hold start
    var queue = [];     // initialize array as a queue to hold adjacent points

    // decide starting point
    // if there is an exact center, start in a square closest to the center with most carrots
    var rows = garden.length;
    var columns = garden[0].length;

    var midRow = Math.floor(rows / 2);
    var midColumn = Math.floor(columns / 2);

    if (rows % 2 == 1 && columns % 2 == 1) {
        // there is an exact center bc both rows and columns are odd
        carrots = garden[midRow][midColumn];
        start = [midRow, midColumn];
    } else if (rows % 2 == 1 && columns % 2 == 0) {
        // choose in the row, the highest between the two middle points
        var leftMiddleColumn = Math.floor(columns / 2);
        var rightMiddleColumn = leftMiddleColumn - 1;
        start = [midRow, leftMiddleColumn];
        if (garden[midRow][rightMiddleColumn] > garden[start[0]][start[1]]) start = [midRow, rightMiddleColumn];
        carrots = garden[start[0]][start[1]];
    } else if (rows % 2 == 0 && columns % 2 == 1) {
        // choose in the column, the highest between the two middle points
        var upperMiddleRow = Math.floor(rows / 2);
        var lowerMiddleRow = upperMiddleRow - 1;

        start = [upperMiddleRow, midColumn];

        if (garden[lowerMiddleRow][midColumn] > garden[start[0]][start[1]]) start = [lowerMiddleRow, midColumn];
        carrots = garden[start[0]][start[1]];
    } else {
        // choose the highest of the 4 middle points of the matrix
        var leftMiddleColumn = Math.floor(columns / 2);
        var rightMiddleColumn = leftMiddleColumn - 1;
        var upperMiddleRow = Math.floor(rows / 2);
        var lowerMiddleRow = upperMiddleRow - 1;

        start = [upperMiddleRow, leftMiddleColumn];
        if (garden[upperMiddleRow][rightMiddleColumn] > garden[start[0]][start[1]]) start = [upperMiddleRow, rightMiddleColumn];
        if (garden[lowerMiddleRow][leftMiddleColumn] > garden[start[0]][start[1]]) start = [lowerMiddleRow, leftMiddleColumn];
        if (garden[lowerMiddleRow][rightMiddleColumn] > garden[start[0]][start[1]]) start = [lowerMiddleRow, rightMiddleColumn];
        carrots = garden[start[0]][start[1]]
    }

    // greedy variation of Breadth-First Search ==> compare all adjacent squares and choose next highest square
    queue.push(start);

    while (queue.length) {
        var current = queue.shift();
        var currentRow = current[0];
        var currentCol = current[1];

        if (currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < columns) {
            // mark the square as visited by assigning it a negative number
            garden[currentRow][currentCol] = -1;
            // check for adjacent square with most carrots
            var north = 0, south = 0, east = 0, west = 0;
            if (currentRow+1 >= 0 && currentRow+1 < rows && currentCol >= 0 && currentCol < columns) north = [currentRow+1, currentCol];
            if (currentRow-1 >= 0 && currentRow-1 < rows && currentCol >= 0 && currentCol < columns) south = [currentRow-1, currentCol];
            if (currentRow >= 0 && currentRow < rows && currentCol+1 >= 0 && currentCol+1 < columns) east = [currentRow, currentCol+1];
            if (currentRow >= 0 && currentRow < rows && currentCol-1 >= 0 && currentCol-1 < columns) west = [currentRow, currentCol-1];

            var greatest = 0;
            var greatestPoint = [];
            if (!!north) {
                greatest = garden[north[0]][north[1]];
                greatestPoint = [north[0], north[1]]
            }
            if (!!south && garden[south[0]][south[1]] > greatest) {
                greatest = garden[south[0]][south[1]];
                greatestPoint = [south[0], south[1]];
            }
            if (!!east && garden[east[0]][garden[1]] > greatest) {
                greatest = garden[east[0]][east[1]];
                greatestPoint = [east[0], east[1]];
            }
            if (!!west && garden[west[0]][west[1]] > greatest) {
                greatest = garden[west[0]][west[1]];
                greatestPoint = [west[0], west[1]];
            }

            carrots += greatest;
            if(!!greatestPoint && greatest !== 0) queue.push(greatestPoint);
        }
    }
    console.log(carrots);
    return carrots;
}

getCarrots([[5, 7, 8, 6, 3],
[0, 0, 7, 0]]);

getCarrots([[5, 7, 8, 6],
            [0, 0, 7, 0],
            [4, 6, 3, 4],
            [3, 1, 0, 5]]);
