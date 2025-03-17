const btnEl = document.querySelector(".btn");
const img_container = document.querySelector(".image-container");
/* console.log(img_container) */



/* load data */
let imagesData;
if (localStorage.value != 0) {
    imagesData = JSON.parse(localStorage.imagesData)
} else {
    imagesData = [];
}

localStorage.setItem("imagesData", JSON.stringify(imagesData))


/* show data */
function ShowData() {
    for (i = 0; i < imagesData.length; i++) {
        const newImage = document.createElement("img")
        newImage.src = imagesData[i];
        img_container.appendChild(newImage);
    }
}
ShowData()



/* Create more images */
btnEl.addEventListener("click", () => {
    let imageNum = 4;
    addNewImages(imageNum);
    console.log(imagesData)
});

function addNewImages(imgNum) {

    for (let i = 0; i < imgNum; i++) {
        const newImage = document.createElement("img")
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        img_container.appendChild(newImage);
        imagesData.push(newImage.src)
        localStorage.setItem("imagesData", JSON.stringify(imagesData))

    }

};




