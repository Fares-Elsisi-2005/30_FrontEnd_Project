
/* const navEl = document.querySelector(".navbar");
console.log(navEl)
window.onscroll = function () {
    if (screenY >= 768.888916015625) {
        navEl.classList.add("active");
    }
    else {
        navEl.classList.remove("active");
        
    }
} */


    
const navEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");


console.log(navEl.offsetHeight)
window.addEventListener("scroll", () => {
    if (window.scrollY >=bottomContainerEl.offsetTop - navEl.offsetHeight - 50) {
    navEl.classList.add("active");
}
else {
    navEl.classList.remove("active");
    
}})  