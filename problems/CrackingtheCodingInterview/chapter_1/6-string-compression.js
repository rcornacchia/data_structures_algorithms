// Implement a method to perform basic string compression using the counts of repeated characters. 
// ex) the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, your method should return the original string. 
// You can assume the string has only uppercase and lowercase letters (a - z).

function compress(str) {
    let compressed = '';
    let count = 0;
    let prev = str[0];

    str.split('').map((char, i) => {
        if (i === str.length-1) {
            count += 1;
            compressed += `${prev}${count}`;
        }
        if (prev === char) {
            count += 1;
        } else {
            compressed += `${prev}${count}`;
            prev = char;
            count = 1;
        }
    });

    if (compressed.length < str.length) return str;
    return compressed;
}

console.log(compress('aabcccccaaa'));