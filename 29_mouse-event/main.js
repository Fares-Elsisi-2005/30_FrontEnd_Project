const xPos = document.getElementById("xPos");
const yPos = document.getElementById("yPos");
console.log( xPos);
    console.log(yPos);


window.addEventListener("mousemove", (event) => {
     
    xPos.innerHTML = `${event.offsetX}
        <h4>Mouse X position(px)</h4>`;
    yPos.innerHTML = `${event.offsetY}
        <h4>Mouse Y position(px)</h4>`;
    
   



})