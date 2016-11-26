// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
// The function prototype should be:
// bool isMatch(const char *s, const char *p)

var isMatch = function(s, p) {
    if (s === p) return true;

    let i  = 0;
    let j  = 0;

    while (i < s.length || j < p.length) {
        if (s[i] === "." || p[j] === ".") {
            if (s[i + 1] === "*") {
                if (!s[i + 2]) return true;
                else i += 2;
            }
            else if (p[j + 1] === "*") {
                if (!p[j+2]) return true;
                else j += 2;
            }
            else {
                i += 1;
                j += 1;
            }
        } else if (s[i] === "*" || p[j] === "*") {
            // a*b*, a*b*
            if (s[i] === "*" && p[j] === "*" && s[i-1] === p[j-1]) {
                i += 1;
                j += 1;
            } else if (s[i] === "*") {
                while (p[j] === s[i-1]) j += 1;
                i += 1;
            } else if (p[j] === "*") {
                while (s[i] === p[j-1]) i += 1;
                j += 1;
            }
        } else if (s[i] !== p[j]) {
            // a*ab, aaab
            if (s[i-1] === "*" && p[j-1] === s[i]) {
                i += 1;
                j += 1;
            } else if (p[j-1] === "*" && s[i-1] === p[j]) {
                i += 1;
                j += 1;
            }
            // aab, c*a*b
            else if (s[i+1] === "*" ) i += 2;
            else if (p[j+1] === "*") j += 2;
            else return false;
        } else {
            i += 1;
            j += 1;
        }
    }
    return true;
};

// console.log(isMatch("aa","a"));              // false
// console.log(isMatch("aa","aa"));             // true
// console.log(isMatch("aaa","aa"));            // false
// console.log(isMatch("aa", "a*"));            // true
// console.log(isMatch("aa", ".*"));            // true
// console.log(isMatch("ab", ".*"));            // true
// console.log(isMatch("a*b*", "a*b*"));        // true
// console.log(isMatch("aab", "c*a*b"));        // true
// console.log(isMatch("aaabba", "a*ab*a"));    // true
// console.log(isMatch(".*ba", "aaa"));         // false
// console.log(isMatch("aaa", "aaaa"));         // false
// console.log(isMatch("aaa", "a.a"));          // true
