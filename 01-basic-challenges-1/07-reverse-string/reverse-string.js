function reverseString(str) {
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

module.exports = reverseString;
