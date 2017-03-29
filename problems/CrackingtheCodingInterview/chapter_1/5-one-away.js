// there are three types of edits that can be performed on strings
// insert, replace or remove a character
// Given two strings, write a function to check if they are one (or zero) edits away

function isSimilar(str1, str2) {
    let differences = i = j = 0;
    one = str1.split('');
    two = str2.split('');
    while (one[i] !== undefined && two[j] !== undefined) {
        if (one[i] == two[j]) {
            i += 1;
            j += 1;
        } else {
            differences += 1;
            if (differences > 1) return false;
            if (one[i+1] == two[j+1]) {
                // just a different letter
                i += 1;
                j += 1;
            } else {
                if (one[i+1] == two[j]) i += 1;
                else if (two[j+1] == one[i]) j += 1;
            }
        }
    }
    return true;
}

console.log(isSimilar("pale", "ple"));   // true
console.log(isSimilar("pales", "pale")); // true
console.log(isSimilar("pale", "bale"));  // true
console.log(isSimilar("pale", "bake"));  // false