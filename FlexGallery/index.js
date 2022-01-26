const panel=document.querySelectorAll(".panel");
function toggleopen(){
    this.classList.toggle("open");  
    this.classList.toggle("open-active");
}
panel.forEach(pan=>{pan.addEventListener("click",toggleopen)});