const isValidIPv4 = (string) => {
    const seperatedString = string.split(".");

    if (seperatedString.length !== 4) return false;

    return seperatedString.every((item) => {
        const num = parseInt(item);
        return (num >= 0 && num <= 255 && num.toString() === item)
    })
};

module.exports = isValidIPv4;
