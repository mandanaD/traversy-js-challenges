function countVowels(str) {
    const vowels = ['a', 'o', 'u', 'i', 'e'];
    str = str.toLowerCase();
    let vowelsCount = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++
        }
    }
    return vowelsCount;
}

module.exports = countVowels;
