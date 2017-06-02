var convert = function(s, numRows) {
    const result = [];
    const mid = Math.floor(numRows/2);
    for (let i = 0; i < numRows; i++) {
        for(let j = 0; j <  s.length; j++) {
            result[i][j] = null;
        }
    }
    
    let i = 0, j = 0;
    s.split('').map(char => {
        if (i % 2 == 0) {
            // long column
            result[i][j] = char;
            
            if (j == numRows-1) {
                j = 0;
            } else {
                j += 1;
            }
        } else {
            // only 1 element in this column
            result[i][mid] = char;
        }
        i += 1;
    });
    console.log(result);
};

convert('Paypal is hiring', 3);