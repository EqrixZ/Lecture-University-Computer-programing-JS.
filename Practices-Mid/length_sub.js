function lengthOfLongestSubstring(s) {
    let hash = {};
    let left = 0;
    let right = 0;
    let maxSubStr = '';

    while (right < s.length) {
        const char = s[right];

        if (char in hash && hash[char] >= left) {
            left = hash[char] + 1;
        }

        hash[char] = right;
        const curSubStr = s.slice(left, right + 1);

        if (maxSubStr.length < curSubStr.length) {
            maxSubStr = curSubStr;
        }

        right++;
    }

    return (` maxLen: ${maxSubStr.length}, LongestSubstring: "${maxSubStr}"`);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
