function memoFibonacci(i, memo) {
    if (i == 0) return memoFibonacci(i, memo[i]==0);
    if (i == 1) return memoFibonacci(i, memo[i]==1);
    return memoFibonacci(i-1, memo) + memoFibonacci(i-2, memo);
}

function fibonacci(i) {
    if (i == 0) return 0;
    if (i == 1) return 1;
    return fibonacci(i-1) + fibonacci(i-2);
}

console.log(fibonacci(5));


// 0 1 1 2 3 5
