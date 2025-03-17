 
 
/* 
loanAmountEl.addEventListener("keyup", () => {
    console.log(loanAmountEl.value)
})
interestRateEl.addEventListener("keyup", () => {
    console.log(interestRateEl.value)
})
monthsToPayEl.addEventListener("keyup", () => {
    console.log(monthsToPayEl.value)
}) */


function calculateLoan() {
    loanAmountValue = document.getElementById("loanAmount").value;
    interestRateValue = document.getElementById("interestRate").value;
    monthsToPayValue = document.getElementById("monthsToPay").value;

    interest = (loanAmountValue * (interestRateValue * 0.01) / monthsToPayValue);

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(3);
    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}