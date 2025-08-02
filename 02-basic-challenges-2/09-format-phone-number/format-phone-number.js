function formatPhoneNumber(numbers) {
    const numbersToString=numbers.join("")
    return `(${numbersToString.substring(0, 3)}) ${numbersToString.substring(3, 6)}-${numbersToString.substring(6)}`
}

module.exports = formatPhoneNumber;
