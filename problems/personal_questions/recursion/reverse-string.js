// reverse a string
function recursiveReverse(string) {
    if (string === undefined || !string) return '';

    const first = string[0];
    const rest = string.substring(1);

    return recursiveReverse(rest) + first;
}

function reverseString(string) {
    let newString = "";
    let old_counter = string.length;

    while(newString.length !== string.length) {
        newString += string[old_counter-1];
        old_counter--;
    }
    return newString;
}

console.log(recursiveReverse("test"));
