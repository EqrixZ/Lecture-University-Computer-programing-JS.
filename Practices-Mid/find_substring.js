function findUniqueSubstrings(str1, str2, length) {
    let maxlen = length
    let right = 0
    let left = 0
    const setA = new Set(str1);
    const setB = new Set(str2);
    const _diff = new Set(setA);
    for (const element of setB) {
            _diff.delete(element);
    }
    return _diff;
};

console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));