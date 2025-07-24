function findMaxNumber(arr) {
    // build in js method
    // return Math.max(...arr);

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

module.exports = findMaxNumber;
