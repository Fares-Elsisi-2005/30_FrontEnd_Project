const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

console.log(hourEl);
console.log(minuteEl);
console.log(secondEl);

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourdeg = (hour / 12) * 360;
    const minutedeg = (minute / 60) * 360;
    const seconddeg = (second / 60) * 360;


    hourEl.style.transform = `rotate(${hourdeg}deg)`
    minuteEl.style.transform = `rotate(${minutedeg}deg)`
    secondEl.style.transform = `rotate(${seconddeg}deg)`

    setTimeout(updateClock,1000)
}

updateClock();