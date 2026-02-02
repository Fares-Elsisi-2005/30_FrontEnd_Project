const kits = ["crash","kick","snare","tom"];
const containerEl = document.querySelector(".cards-container");


kits.forEach(kit => {
    // create buttons and append it in container
    const btnEl = document.createElement("button");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(./img/${kit}.png)`
    btnEl.classList.add("btn");
    containerEl.appendChild(btnEl);


    // create audio and append it in container 
    const audioEL = document.createElement("audio");
    audioEL.src = `./sounds/${kit}.mp3`
    containerEl.appendChild(audioEL)




    // on click buttons play sound
    btnEl.addEventListener("click", () => {
        audioEL.play();
    })

    // on press the first letter of the word play sound
    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
        audioEL.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(100%)";
            },100)
        }
    })

})