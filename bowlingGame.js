// Feature 1 --> Calculate Total Score
const calculateTotalScore = (rolls) => {
  if (rolls.length > 21) {
    throw new Error('Invalid Input');
  }
  let totalScore = 0;
  let index = 0, countFrames = 0;
  while (index < rolls.length) {
    if (rolls[index] === 10) {
      totalScore += (10 + rolls[index + 1] + rolls[index + 2]);
      if (index === rolls.length - 3) {
        countFrames += 1;
        break;
      }
      index += 1;
    }
    else if (rolls[index] + rolls[index + 1] === 10) {
      totalScore += (10 + rolls[index + 2]);
      if (index === rolls.length - 3) {
        countFrames += 1;
        break;
      }
      index += 2;
    }
    else {
      if ((rolls[index] + rolls[index + 1]) > 10) {
        throw new Error('Invalid Input');
      }
      totalScore += (rolls[index] + rolls[index + 1]);
      index += 2;
    }
    countFrames += 1;
  }
  if (countFrames !== 10 || isNaN(totalScore)) {
    throw new Error('Invalid Input');
  }
  return totalScore;
};

// Feature 2 --> Find Best Score in set of Games
const bestScore = (gameArray) => {
  let maxScore = calculateTotalScore(gameArray[0]);
  return gameArray.reduce((acc, cuu) => {
    acc = Math.max(acc, calculateTotalScore(cuu));
    return acc;
  }, maxScore);
};

module.exports = { calculateTotalScore, bestScore };