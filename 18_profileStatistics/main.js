const countersEl = document.querySelectorAll(".counter");
const minDataCeil = countersEl[0].getAttribute("data-ceil");


countersEl.forEach(counterEl => {
    //intialis all counter to start from 0
    counterEl.innerHTML = "0";
    incrementEl()




    function incrementEl() {
        // get the current number and the max number of counter
        let  currentNum = +counterEl.innerHTML;
        let endNum = counterEl.getAttribute("data-ceil");

        // get the rate of incermentation
        let increment = endNum / minDataCeil;
        currentNum = Math.ceil(currentNum + increment)


        // increment the counter
        if (currentNum < endNum) {
            counterEl.innerHTML = currentNum;
            setTimeout(incrementEl, 50)
        } else {
            counterEl.innerHTML = endNum;
        }
        
    }



})
 
 