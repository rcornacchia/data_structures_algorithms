// // input: string
// // output: true if string is palindrome, else false

// function isPalindrome(str) {
//     const arr = str.split('');
//     let i = 0;
//     let j = str.length-1;
//     while (i <= j) {
//         if (arr[i] == ' ') i = i + 1;
//         else if (arr[j] == ' ') j = j - 1;
//         else if (arr[i] == arr[j]) {
//             i = i + 1;
//             j = j - 1;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("taco cat"));
// console.log(isPalindrome("taco cats"));

const arr = [1, 2, 3];
arr.reduce((acc, index) => {
    console.log(acc);
    console.log(index);
}, arr);