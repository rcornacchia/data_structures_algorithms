// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to O.

const matrix = [[1, 1, 0],
                [1, 0, 1],
                [1, 1, 1]];

function zero(m) {
    printMatrix(m);
    let rows = new Set;
    let cols = new Set;

    m.map((row, r) => {
        row.map((square, c) => {
            if (square === 0) {
                cols.add(c);
                rows.add(r);
            }
        });
    });
    rows.forEach(r => {
        matrix[r].forEach((_, c) => matrix[r][c] = 0);
    });

    cols.forEach(c => {
        matrix.map((row, r) => {
            matrix[r][c] = 0;
        });
    });
    console.log("===========");
    printMatrix(m);
}

function printMatrix(matrix) {
    matrix.map(row => {
        console.log(row);
    });
}

zero(matrix);