function roleDice() {
    return Math.floor(Math.random() * 6 + 1);
}

function diceGameSimulation(num) {
    const results = []
    for (let i = 0; i < num; i++) {
        const dice1 = roleDice();
        const dice2 = roleDice();
        const sum = dice1 + dice2;
        let result = "";
        if (sum === 7 || sum === 12) {
            result = "win"
        } else if (sum === 2 || sum === 3 || sum === 12) {
            result = "lose"
        } else {
            result = "roll again";
        }
        results.push({
            dice1,
            dice2,
            sum,
            result
        });
    }
    return results;
}

module.exports = diceGameSimulation;
