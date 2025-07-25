function isPalindrome(str) {
    let formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = formatedStr.split("").reverse().join("")
    return reversedStr === formatedStr;
}

module.exports = isPalindrome;
