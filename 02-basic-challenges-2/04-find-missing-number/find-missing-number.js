// function findMissingNumber(arr) {
//     const sortedArr = arr.sort((a, b) => a - b);
//
//     if (sortedArr.length) {
//         for (let i = 0; i < sortedArr.length; i++) {
//             if (sortedArr[i] !== i + 1) {
//                 return i + 1;
//             }
//         }
//     } else return 1;
// }

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = n * (n + 1) / 2
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

module.exports = findMissingNumber;
