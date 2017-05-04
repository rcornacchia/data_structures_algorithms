// Assume you have a method isSubstring which checks if one word is asubstring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
// (e.g.,"waterbottle" is a rotation of"erbottlewat").
// ex 2: "waterbottlebottle" is a rotation of "bottlewaterbottle"

function isRotation(s1, s2) {
    let letters1 = {};
    let letters2 = {};
    
    s1.split('').map(c => {
        if (letters1[c]) letters1[c] += 1;
        else letters1[c] = 1;
    });

    s2.split('').map(c => {
        if (letters1[c]) letters1[c] -= 1;
        else letters1[c] = -1;
    });

    // if (letters1 === letters2) console.log('They are equal');
    // else console.log('Not equal');
    console.log(letters1);
    // console.log(letters2);
}

isRotation('erbottlewat', 'bottlewater');