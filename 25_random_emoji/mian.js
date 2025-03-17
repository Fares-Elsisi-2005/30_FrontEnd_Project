const btnEl = document.getElementById("btn");
const emojinameEl = document.getElementById("emoji");


const emoji = [];
async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=1095ae97f9d1bb4dcc0b2f4995da690452bb6866");

    let data = await response.json();

    for (let i = 0; i < 1500; i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,

        })
    }



 
}





console.log(getEmoji())






btnEl.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * (emoji.length + 1));
    btnEl.innerText = emoji[rand].emojiName;
    emojinameEl.innerText = emoji[rand].emojiCode;

})

