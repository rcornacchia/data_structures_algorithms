// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
// The function prototype should be:
// bool isMatch(const char *s, const char *p)

var isMatch = function(s, p) {
    if (s === p) return true;

    let sCount = pCount = 0;
    sLetter = s[sCount];
    pLetter = p[pCount];
    
    while (sCount < s.length || pCount < s.length) {

        if (sLetter === "." || pLetter === ".") {
        	sLetter = pLetter;
        	s[sCount] = p[pCount];
        }
        sCount += 1;
        pCount += 1;
        sLetter = s[sCount];
        pLetter = p[pCount];
    }

    return false;
};

isMatch("aa","a");
isMatch("aa","aa");
isMatch("aaa","aa");
isMatch("aa", "a*");
isMatch("aa", ".*");
isMatch("ab", ".*");
isMatch("aab", "c*a*b");


