const listOfJops = ["freelancer", "frontend develper", "instructor"];


const containerEl = document.querySelector(".container");

let careerIndex = 0;
let charcterIndex = 0;


function updateText() {
    charcterIndex++;

    containerEl.innerHTML = `
        <h1> I am ${listOfJops[careerIndex].slice(0, 1) === "i" ? "an" : "a"} 
        ${listOfJops[careerIndex].slice(0, charcterIndex)}</h1>
`;
    if (charcterIndex === listOfJops[careerIndex].length) {
        careerIndex++;
        charcterIndex = 0;
    }
    if (careerIndex === listOfJops.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 400);


}

/* updateText(); */



