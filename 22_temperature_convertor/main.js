const CelsiusEl = document.getElementById("Celsius");
const fahrenheitEl = document.getElementById("fahrenhtit");
const kelvinEl = document.getElementById("kelvin");


/* CelsiusEl.addEventListener("keyup", () => {
    console.log(CelsiusEl.value);
    
    fahrenheitEl.value = (9 / 5) * CelsiusEl.value + 32;
    kelvinEl.value = CelsiusEl.value + 273.15;
    
})


fahrenheitEl.addEventListener("keyup", () => {
    console.log(fahrenheitEl.value);
    CelsiusEl.value = (9 / 5) * fahrenheitEl.value - 32;
    kelvinEl.value = (9 / 5) * (fahrenheitEl.value - 32) + 273.15;
    })
     
kelvinEl.addEventListener("keyup", () => {
console.log(kelvinEl.value);
    
})
 */

function computeTemp(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            fahrenheitEl.value = (currentValue + 273.32).toFixed(2);
            kelvinEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenhtit":
            CelsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            CelsiusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;

    }
}