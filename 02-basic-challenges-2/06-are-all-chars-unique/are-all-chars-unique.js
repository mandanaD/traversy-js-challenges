// function areAllCharactersUnique(str) {
//     const charArray = []
//     for (let i = 0; i < str.length; i++) {
//         if (charArray.includes(str[i])) {
//             return false
//         }
//         charArray.push(str[i]);
//     }
//     return true
// }


function areAllCharactersUnique(str) {
    const charSet=new Set();
    for (let i = 0; i < str.length; i++) {
        if (charSet.has(str[i])) {
            return false
        }else {
            charSet.add(str[i]);
        }
    }
    return true;
}

module.exports = areAllCharactersUnique;
