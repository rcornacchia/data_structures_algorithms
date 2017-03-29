// Given two strings, write a method to decide if one is a perm of the other.
function isPermutation(one, two) {
    const a = stringToMap(one),
          b = stringToMap(two);
    let result = true;

    Object.keys(a).forEach(char => {
        if(a[char] != b[char]) result = false;
    });

    Object.keys(b).forEach(char => {
        if(b[char] != a[char]) result = false;
    });
    return result;
}

function stringToMap(str) {
    const map = {};
    for(let i=0; i < str.length; i++) {
        const char = str[i];
        if(!map[char]) map[char] = 1;
        else map[char] = map[char] + 1;
    };
    return map;
}

console.log(isPermutation("a33ab", "b3aa"));
