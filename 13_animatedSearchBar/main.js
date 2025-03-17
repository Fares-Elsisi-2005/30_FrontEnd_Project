
const searchContainerEl = document.querySelector(".Search-Container")
const magnifierEl = document.querySelector(".magnifier");
const inputEl = document.querySelector(".input");
const micEl = document.querySelector(".mic");

console.log(searchContainerEl)
console.log(magnifierEl)
console.log(inputEl)
console.log(micEl)

let searchMood = "clicked"

magnifierEl.addEventListener("click", () => {
    searchContainerEl.classList.toggle("active")

})

