function generateHashtag(str) {
    if (str.trim() === '') {
        return false
    }
    let words = str.trim().split(/\s+/).map((item) => item[0].toUpperCase() + item.slice(1))
    if (words.join('').length  > 140) return false

    return "#" + words.join('')
}

module.exports = generateHashtag;
