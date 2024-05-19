const bodyTag = document.querySelector("body");
const hamburgerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");

const hamburgerLine1Tag = document.querySelector(".line1");
const hamburgerLine2Tag = document.querySelector(".line2");
const hamburgerLine3Tag = document.querySelector(".line3");

const overlayMenuTag = document.querySelector(".overlayMenu");
const liTag = document.querySelectorAll("li");
const ulTag = document.querySelector("ul");
/*hamburgerMenuContainerTag.addEventListener("click", ()=>{
    if( hamburgerMenuContainerTag.classList.contains("isOpened")){
        hamburgerLine2Tag.classList.remove("hideTheDiv");
        hamburgerLine1Tag.classList.remove("rotateRight");
        hamburgerLine3Tag.classList.remove("rotateLeft")
        hamburgerMenuContainerTag.classList.remove("isOpened")
    }else{
        hamburgerLine2Tag.classList.add("hideTheDiv");
        hamburgerLine1Tag.classList.add("rotateRight");
        hamburgerLine3Tag.classList.add("rotateLeft")
        hamburgerMenuContainerTag.classList.add("isOpened")    
    }
})*/
/*
let count= 0;
hamburgerMenuContainerTag.addEventListener("click", ()=>{
    if( count !== 0){
        hamburgerLine2Tag.classList.remove("hideTheDiv");
        hamburgerLine1Tag.classList.remove("rotateRight");
        hamburgerLine3Tag.classList.remove("rotateLeft");
        count = 0;
    }else{
        hamburgerLine2Tag.classList.add("hideTheDiv");
        hamburgerLine1Tag.classList.add("rotateRight");
        hamburgerLine3Tag.classList.add("rotateLeft");
        count += 1;
    }
})
*/

// အပေါ်ဆုံးကနည်းက m square ကနည်း။ အောက်ကနှစ်ခုက ကိုယ့်ဘာသာစမ်းထားတာ။

let menuOpen = false;
hamburgerMenuContainerTag.addEventListener("click", ()=>{
    if( menuOpen === true){
        hamburgerLine2Tag.classList.remove("hideTheDiv");
        hamburgerLine1Tag.classList.remove("rotateRight");
        hamburgerLine3Tag.classList.remove("rotateLeft");
        bodyTag.style.backgroundColor = "rgb(99, 96, 91)"
        overlayMenuTag.classList.remove("overlayMenuShower");
        /*for(let i = 0; i<liTag.length; i++){
            liTag[i].classList.remove("liTagUp")
        }
        */
        ulTag.classList.remove("liTagUp");
        menuOpen = false;
    }else{
        hamburgerLine2Tag.classList.add("hideTheDiv");
        hamburgerLine1Tag.classList.add("rotateRight");
        hamburgerLine3Tag.classList.add("rotateLeft");
        bodyTag.style.backgroundColor = "rgb(8, 80, 80)"
        
        overlayMenuTag.classList.add("overlayMenuShower");
        /*
        for(let i = 0; i<liTag.length; i++){
            liTag[i].classList.add("liTagUp")
        }
        */
        ulTag.classList.add("liTagUp");
        menuOpen = true;
    }
}) 

