const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
/* 
console.log(dayEl);
console.log(hoursEl);
console.log(minutesEl);
console.log(secondsEl);
 */
let newYearTime = new Date("Jan 1, 2026 00:00:00").getTime();



updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gapTime = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gapTime / day);
    const h = Math.floor((gapTime % day) / hour);
    const m = Math.floor((gapTime % hour) / minute);
    const s = Math.floor((gapTime % minute) / second);
    
    dayEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
     secondsEl.innerText = s;

    
    setTimeout(() => {
        updateCountdown()
    },1000)
}