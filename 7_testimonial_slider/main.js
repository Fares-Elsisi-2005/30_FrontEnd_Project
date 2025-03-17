
const testimonialsh = [
    {
        name: "Sama O",
        photoUrl: "https://plus.unsplash.com/premium_photo-1667490646793-3e2bfe0927ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `I highly recommend dragon. It has been so important for us as we continue to grow our company.
            yes and there is alot of this dragons in the fictional world so i will attend this dat at 19 jun`
    },
    {
        name: "Fares A",
        photoUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `knight makes me more productive and gets the job done in a fraction of the time. I'm glad I found knight.`
    },
    {
        name: "Roaa A",
        photoUrl: "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `I have tried a lot of similar products and programming is the best!`
    },
    {
        name: "Rodina H",
        photoUrl: "https://media.istockphoto.com/id/1296893548/photo/im-in-need-of-some-company.jpg?s=612x612&w=is&k=20&c=HlA7eyAULovoEAfd-3dnPyM5qzIc5K1-0QdaS5W5eVk=",
        text: `frontend has helped my team and I stay on the same page. Previously, we were all over the board. Using frontend has definitely saved us time and money.`
    }

]


let imgEl = document.querySelector("img");
let userNameEl = document.querySelector(".username");
let textEl = document.querySelector(".text");
console.log(imgEl);
console.log(userNameEl);
console.log(textEl);




//solve1

/* let num = 0;

let nnn = setInterval(() => {
    updatedata(num);
    num++;
    if (num === 4) {
        num = 0;
    }
}, 4000)

function updatedata(index) {
    imgEl.src = `${testimonialsh[index].photoUrl}`;
    textEl.innerHTML = `${testimonialsh[index].text}`;
    userNameEl.innerHTML = `${testimonialsh[index].name}`;
}

clearInterval(nnn)
 */





//solve2

/* with destruction */
idx = 0;
updatedata2()
function updatedata2() {
    const { name, photoUrl, text } = testimonialsh[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    userNameEl.innerHTML = name;
    idx++;

    if (idx === testimonialsh.length) {
        idx = 0;
    }

    setTimeout(() => {
        updatedata2()
    }, 10000)
}


