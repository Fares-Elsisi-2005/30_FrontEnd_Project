const percentageEl = document.getElementById("conter");
const prograsEl = document.getElementById("Loading-bar-front");


console.log(percentageEl);
console.log(prograsEl);
let idx = 0;

updateNum();

function updateNum() {
    percentageEl.innerText = idx + "%";
    prograsEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateNum, 20)
   }
}