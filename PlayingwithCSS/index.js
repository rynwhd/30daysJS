const body=document.querySelector("body");
const basecolor=document.querySelector("input.basecolor");
const blur=document.querySelector("input.blur");
const spacing=document.querySelector("input.spacing");
const img= document.querySelector("img");
spacing.addEventListener("input",function(){
    let spa=event.target.value;
    spa*=12;
    document.querySelector(".img").style.padding=`${spa}px`
});
blur.addEventListener("input",function(event){
    let val=event.target.value;
    val/=5;
    img.style.filter=`blur(${val}px)`;
});
basecolor.addEventListener("input",function(event){
        const color=event.target.value;
        document.querySelector(".img").style.backgroundColor=color;
        document.querySelector(".heading").style.color=color;
        console.log(color);
});
