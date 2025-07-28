function findMissingLetter(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const firstIndex = alphabet.indexOf(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== alphabet[firstIndex + i]) {
            return alphabet[firstIndex + i];
        }
    }
    return "";
}

module.exports = findMissingLetter;
