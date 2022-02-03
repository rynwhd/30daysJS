const drawarea=document.querySelector("#area");
const ctx=drawarea.getContext('2d');//context is what we actually draw on, it can be 2d or 3d
drawarea.width=window.innerWidth;
drawarea.height=window.innerHeight;
ctx.strokeStyle='blue';//starting color of the line
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.strokeRect(500,500,1000,1000);
//how the line will be at the end or while joining with the other line
let isdrawing=false;
let lastX=0;
let lastT=0;
drawarea.addEventListener('mousemove',draw);

function draw(e){
    console.log(e);
}


