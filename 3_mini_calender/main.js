const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

/* console.log(monthNameEl);
console.log(dayNameEl);
console.log(dayNumberEl);
console.log(yearEl);
 */

const date = new Date();

const month = date.getMonth()

console.log(month);

monthNameEl.innerHTML = date.toLocaleString("en", {
    month: "long"
});

dayNameEl.innerHTML = date.toLocaleString("en", { weekday: "long" });
dayNumberEl.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear()

