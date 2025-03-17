const trailerContainerEl = document.getElementById("trailer-container");
const buttonEl = document.getElementById("WatchNow");
const closeiconEl = document.getElementById("close-icon");
const videoEl = document.querySelector("video");

buttonEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
})

closeiconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;

})
