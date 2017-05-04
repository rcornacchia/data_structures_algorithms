function flatten(arr) {
    let stack = [];
    while (arr.length) x.length ? arr.push(...x) : stack.push(x);
    return stack;
}

let x = [[1, 2, 3], 4, [5, [6, 7]]];
console.log(flatten(x));
