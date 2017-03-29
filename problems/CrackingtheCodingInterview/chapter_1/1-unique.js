// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

function allUnique(text) {
    let letters = {};

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (!letters.hasOwnProperty(letter)) {
            letters[letter] = 1;
        } else {
            return false;
        }
    }
    return true;
}

const result = allUnique('stringg');
console.log(result);
