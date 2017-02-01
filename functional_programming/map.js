// example of map function
let arr = [1, 2, 3, 4, 5];
arr = arr.map(x => x + 1);
console.log(arr);


// personal map function
function Map(func, array) {
    for(let i = 0; i < array.length; i++) {
        func(array[i]);
    }
    return array;
}

function rmap(func, array) {
    
}

const result = Map(x => x + 1, arr);
console.log(result);
