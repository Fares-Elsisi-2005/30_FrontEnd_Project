const inputEl = document.querySelector(".input");
const circleEl = document.querySelector(".circle");
const bodyEl = document.body;
console.log(inputEl.checked);


inputEl.checked = JSON.parse(localStorage.getItem("mood"))
updateBody();

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();



})

function updateBody(isToggleWork) {
    if (inputEl.checked) {
        bodyEl.style.background = "black";

    } else {
        bodyEl.style.background = "white";

    }
}


function updateLocalStorage() {
    localStorage.setItem("mood", JSON.stringify(inputEl.checked))
}