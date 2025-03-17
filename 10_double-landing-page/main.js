const containerEl = document.querySelector(".container")

const appleContainerEl = document.querySelector(".left");
const samsungContainerEl = document.querySelector(".right");

console.log(appleContainerEl);
console.log(samsungContainerEl);
console.log(containerEl);


appleContainerEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-left");

})
appleContainerEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-left");

})


samsungContainerEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-right");

})

samsungContainerEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-right");

})