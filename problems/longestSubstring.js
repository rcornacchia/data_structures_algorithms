var s = "dvdf"
var lengthOfLongestSubstring = function(s) {
    var longestSubstring = "";
    var substring = "";

    for(var i=0; i < s.length; i++) {
        var currentLetter = s[i];
        if (substring.indexOf(currentLetter) >= 0) {
            var start = substring.indexOf(currentLetter);
            substring = substring.substring(start + 1, i + 1);
        }
        substring = substring + currentLetter;
    }
    if (substring.length >= longestSubstring.length){
        longestSubstring = substring;
    }
}
var lengthOfLongestSubstring2 = function(s) {
    var length = s.length;
    var letters = {};
    var result = 0, i = 0, j = 0;

    while (i < length && j < length) {
        if (letters[s[j]] != 1) {
            letters[s[j++]] = 1;
            if(j-i > result) result = j-i;
        } else {
            letters[s[i++]] = 0;
        }
    }
    console.log(result);
}

lengthOfLongestSubstring2(s);
lengthOfLongestSubstring(s);