function flatten(arr) {
    let stack = [];
    while (arr.length) arr.length ? arr.push(...arr) : stack.push(arr);
    return stack;
}

let x = [[1, 2, 3], 4, [5, [6, 7]]];
console.log(flatten(x));
