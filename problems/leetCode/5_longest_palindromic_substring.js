function longestPalindrome(s) {

}

function isPalindrome(s) {
    let stack = [];
    s.split('').map(char => {
        if (stack[stack.length-1] === char) stack.pop();
        else if (stack[stack.length-2] === char) {
            stack.pop();
            stack.pop();
        }
        else stack.push(char);
    });
    if (stack.length) return false;
    return true;
}

console.log(longestPalindrome('abcba')); // abba