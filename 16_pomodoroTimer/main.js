const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


/* console.log(startEl);
console.log(stopEl);
console.log(resetEl);
console.log(timerEl);
 */



let interval;
// 1500s = 25min
let timerLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timerLeft / 60);

 
    let seconds = timerLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart()}`;
    timerEl.innerHTML = formattedTime;
}




function startTimer() {
    interval = setInterval(() => {
        timerLeft--;
        updateTimer();
        if (timerLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timerLeft = 1500;
            updateTimer();
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);

}

function resetTimer() {
    clearInterval(interval);
    timerLeft = 1500;
    updateTimer()
}




startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);


console.log("7".padStart(4, "123"));
console.log("X".padStart(6, "xyz"));

