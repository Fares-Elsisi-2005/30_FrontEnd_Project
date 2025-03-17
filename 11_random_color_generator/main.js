const containerEl = document.querySelector(".container")


/* color-container */

for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.className = "color-container";

    containerEl.appendChild(colorContainer);
}



const ColorContainersEls = document.querySelectorAll(".color-container");

//  change the backgrond by hex color code for each div
function generateColors() {
    ColorContainersEls.forEach((colorContainer) => {

        const newColorCode = createNewColor();
        colorContainer.innerHTML = newColorCode;
        colorContainer.style.background = newColorCode;
    })
}

// create the hex color code
function createNewColor() {
    const chars = "0123456789abcdef";
    const colorCodelength = 6;
    let colorCode = "";


    for (let i = 0; i < colorCodelength; i++) {

        const randomNum = Math.floor(Math.random() * chars.length);

        colorCode += chars.substring(randomNum, randomNum + 1);

    }


    colorCode = "#" + colorCode;
    return colorCode;

}

generateColors()

