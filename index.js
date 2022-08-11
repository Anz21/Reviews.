let cards = [
    {
        id:"1",
        img:"test.jpg",
        names: "Anz Kartvelishvili",
        work:"Web Developer",
        text:`Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Recusandae 
         nesciunt qui iure nobis quis quod fuga minus natus perferendis. Doloremque!`,
    },
    {
        id:"2",
        img:"1.jpg",
        names: "DaviD",
        work:"SysTem Engineer",
        text:`Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Recusandae 
        nesciunt qui iure nobis quis quod fuga minus natus perferendis. Doloremque!`,
    },
    {
        id:"3",
        img:"2.jpg",
        names: "Bacho",
        work:"Web Developer",
        text:`Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Recusandae 
        nesciunt qui iure nobis quis quod fuga minus natus perferendis. Doloremque!`,
    },
    {
        id:"4",
        img:"3.jpg",
        names: "Lasha",
        work:"BlackJack Dealer",
        text:`Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Recusandae 
        nesciunt qui iure nobis quis quod fuga minus natus perferendis. Doloremque!`,
    },
    {
        id:"5",
        img:"4.jpg",
        names: "Vasil",
        work:"Lawyer",
        text:`Lorem ipsum dolor sit amet
         consectetur adipisicing elit. Recusandae 
         nesciunt qui iure nobis quis quod fuga minus natus perferendis. Doloremque!`,
    }
]


const img = document.getElementById("imgs");
const nam = document.getElementById("names");
const job = document.getElementById("jobs");
const text = document.getElementById("info");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const randomBtn = document.getElementById("random")

let currentDisplay = 0;


window.addEventListener("DOMContentLoaded" , function(){
    load();
})

function load(){
    const item = cards[currentDisplay];
    img.src = item.img;
    nam.textContent = item.names;
    job.innerHTML = item.work;
    text.textContent = item.text;
}


rightBtn.addEventListener("click" , function(){
    
    currentDisplay++;
    
    if(currentDisplay === 5){
        currentDisplay = 0;
    }
    load()
})


leftBtn.addEventListener("click" , function(){
    
    currentDisplay--;
    
    if(currentDisplay === -1){
        currentDisplay = 4;
    }
    load()
})


randomBtn.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random()*5);
    currentDisplay = randomNumber;
    load();
})
