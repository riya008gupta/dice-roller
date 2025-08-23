document.getElementById("rollBtn").addEventListener("click", rollDice);

function rollDice() {
  let highestRoll = 0;
  let winner = "";
  let tie = false;

  for (let i = 1; i <= 6; i++) {
    // Random number from 1 to 6
    const roll = Math.floor(Math.random() * 6) + 1;

    // Update image
    const imgPath = `Dice${roll}.png`;
    const diceElement = document.getElementById(`player${i}-dice`);
    diceElement.src = imgPath;

    // Check for highest roll
    if (roll > highestRoll) {
      highestRoll = roll;
      winner = `Player ${i}`;
      tie = false;
    } else if (roll === highestRoll) {
      tie = true;
    }
  }

  // Display result
  const result = document.getElementById("result");
  result.textContent = tie
    ? "It's a tie! 🎲"
    : `${winner} wins with a ${highestRoll}! 🎉`;
}
