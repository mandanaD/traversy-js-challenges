//  it's doing it wrong even if it works / msp must return something useful 4ms
// function countOccurrences(str ,char) {
//     let count = 0;
//     str.split('').map((item) => {
//         if (item===char) {
//            count++;
//         }
//     })
//     return count;
// }
//
// module.exports = countOccurrences;

// clean code and readable 3ms
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

module.exports = countOccurrences;
