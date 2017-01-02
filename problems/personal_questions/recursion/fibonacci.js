function memoFibonacci(i, memo) {
    if (i == 0 || i == 1) return i;
    if (memo[i] == undefined) {
        memo[i] = memoFibonacci(i-1, memo) + fibonacci(i-2, memo);
    }
    return memo[i];
}

function fibonacci(i) {
    if (i == 0 || i == 1) return i;
    return fibonacci(i-1) + fibonacci(i-2);
}

console.log(fibonacci(5));
console.log(memoFibonacci(5, [0, 1]))
// 0 1 1 2 3 5
