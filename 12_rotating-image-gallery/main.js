const imageContainerEl = document.querySelector(".gallery-container");
const preEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

/* console.log(imageContainerEl);
console.log(preEl);
console.log(nextEl);
 */

let x = 0;
let timer;
preEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
})
nextEl.addEventListener("click", () => {
    x -= 45
    clearTimeout(timer);
    updateGallery();
})




function updateGallery() {
    imageContainerEl.style.transform = `perspective(2000px) rotateY(${x}deg) `;

    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 2000)
}

updateGallery();
