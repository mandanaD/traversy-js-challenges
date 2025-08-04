function highestScoringWord(str) {
    const words = str.split(' ');

    const scores = words.map((word) => {
        let score = 0;
        for (const letter of word) {
            score += letter.toLowerCase().charCodeAt(0) - 96;
        }
        return score;
    })

    let highestScore = 0;
    let highestScoreIndex = 0;
    for (let i = 0; i < scores.length; i++) {
        if (highestScore < scores[i]) {
            highestScore = scores[i];
            highestScoreIndex = i
        }
    }

    return words[highestScoreIndex];
}

module.exports = highestScoringWord;
