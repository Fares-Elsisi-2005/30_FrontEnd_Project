const rollbuttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollhistoryEl = document.getElementById("roll-history");



rollbuttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => { diceEl.classList.remove("roll-animation") }, 1000);

    rollDice();
})


let historyList = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;

    const diceFace = getDiceFace(rollResult)
    diceEl.innerHTML = diceFace;

    historyList.push(rollResult);
    updateHistory();


}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

function updateHistory() {
    rollhistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}:  <span>${getDiceFace(historyList[i])}</span>`

        rollhistoryEl.appendChild(listItem);

    }

}
