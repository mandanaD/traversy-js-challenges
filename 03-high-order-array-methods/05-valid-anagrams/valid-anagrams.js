function validAnagrams(str1, str2) {
    const str1Score = str1.split("").reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0);
    const str2Score = str2.split("").reduce((acc, letter) => acc + letter.charCodeAt(0) - 96, 0);
    return str1Score === str2Score;
}

module.exports = validAnagrams;
