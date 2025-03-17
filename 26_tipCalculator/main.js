const billAmountEl = document.getElementById("billAmount");
const tipPerEl = document.getElementById("tipPerc");

const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");


console.log(billAmountEl)
console.log(tipPerEl)
console.log(btnEl)
console.log(resultEl)

btnEl.addEventListener("click", () => {
    let total =   billAmountEl.value * (1+tipPerEl.value / 100) ;

    resultEl.innerHTML = `$${total.toFixed(2)}`
})