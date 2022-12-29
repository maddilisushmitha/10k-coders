const container=document.querySelector(".container");
const card=document.querySelector(".card");

container.addEventListener("mousemove",(rotate)=>{
    let x=innerWidth / 2 - rotate.pageX;
    let Y=innerHeight / 2 - rotate.pageY;
    card.style.transform="rotateY(" + x + "deg) rotateX(" + y + "deg)";

})