const diceImage = document.getElementById("diceImage");
const rollHistory = document.getElementById("rollHistory");

function rollDice() {
  // Add spinning effect
  diceImage.classList.add("spin");

  let counter = 0;
  const interval = setInterval(() => {
    const tempRoll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${tempRoll}.png`;
    counter++;
  }, 150);

  setTimeout(() => {
    clearInterval(interval);
    diceImage.classList.remove("spin");

    const roll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `dice${roll}.png`;

    const listItem = document.createElement("li");
    listItem.textContent = `You rolled: ${roll}`;
    rollHistory.prepend(listItem);
  }, 2000); // roll time = 2 seconds
}