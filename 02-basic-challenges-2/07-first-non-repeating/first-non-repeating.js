function findFirstNonRepeatingCharacter(str) {
    const charCount = {}
    for (const strElement of str) {
        charCount[strElement] = (charCount[strElement] || 0) + 1;
    }
    for (const strElement of str) {
        if (charCount[strElement] === 1) {
            return strElement;
        }
    }
    return null;
}

module.exports = findFirstNonRepeatingCharacter;
