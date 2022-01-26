const second= document.querySelector(".second");
const minute= document.querySelector(".minute");
const hour= document.querySelector(".hour");
function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();
    const setseconds=(seconds*6)+90;
    const setminutes=(minutes*6)+90;
    const sethours=(hours*30)+90;
    second.style.transform=`rotate(${setseconds}deg)`;
    minute.style.transform=`rotate(${setminutes}deg)`;
    hour.style.transform=`rotate(${sethours}deg)`;

}
setInterval(setDate,1000);