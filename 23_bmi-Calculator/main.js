const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const resulttEl = document.getElementById("bmi-result");
const wtConditionEl = document.getElementById("weight-condition");



function CalculateBMI() {
    const heightValue = heightEl.value / 100;
    const weighttValue = weightEl.value;

    const bmiNum = weighttValue / (heightValue * heightValue);
    console.log(bmiNum)
    resulttEl.value = bmiNum;

    if (bmiNum < 18.5) {
        wtConditionEl.innerText = "Underweight";
    } else if (bmiNum > 18.5 && bmiNum < 24.5){
        wtConditionEl.innerText = "Normal Weight";
    } else if (bmiNum > 25 && bmiNum < 29.9) {
        wtConditionEl.innerText = "Overweight";
    } else if (bmiNum > 30 && bmiNum < 34.9) {
        wtConditionEl.innerText ="obesity" ;
    } else {
        wtConditionEl.innerText ="Extreme obesity" ;
        
    }
}


btnEl.addEventListener("click" , CalculateBMI)
 