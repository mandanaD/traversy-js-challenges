function sumOfEvenSquares(numbers) {
    const evenSquares = numbers
        .filter(number => number % 2 === 0)
        .map(number => number ** 2)
        .reduce((a, b) => a + b, 0);
    if (evenSquares) return evenSquares;
    return 0;
}

module.exports = sumOfEvenSquares;
