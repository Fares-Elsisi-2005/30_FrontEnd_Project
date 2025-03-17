

const inpetTextEl = document.getElementById("textarea");

const totalCharactersEl = document.getElementById("total-counter");

const remainingCharactersEl = document.getElementById("remaining-counter");



// to let the text length in the counters
updateCounters();

inpetTextEl.addEventListener("keyup", () => {

    updateCounters();


})


function updateCounters() {
    // get the length of the text each time you keyup and let its value in the total charaters each time you user key up;
    totalCharactersEl.innerHTML = inpetTextEl.value.length;


    // subtract the length of the text from the maxlength every time you key up and put the result in the remaining

    remainingCharactersEl.innerHTML = inpetTextEl.getAttribute("maxlength") - inpetTextEl.value.length;

}


