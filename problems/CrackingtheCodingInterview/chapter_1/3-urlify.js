// URLify - Write a method to replace all spaces in a string with '%20'
// you may assume that the sufficient space at the end to hold all the characters

// Example:
// Input: "Mr John Smith    ", 13
// Output: "Mr%20John%20Smith"

function urlify(str, end) {
    let arr = str.split("");
    for (let i = 0; i < end; i++) {
        if (arr[i] === " ") {
            for (let j = end; j > i + 2; j--) {
                arr[j] = arr[j-2];
            }
            arr[i] = "%";
            arr[i+1]= "2";
            arr[i+2]= "0";
        }
    }
    // console.log(arr);
    console.log(arr.join(""));
}

urlify("test test test", 17);