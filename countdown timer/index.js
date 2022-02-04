const cd=document.querySelector(".cd");
const mitem=document.querySelectorAll(".menuitems");
const disptimer=document.querySelector(".disptimer");
let minutes=0;
var status=0;
var cdsec=0;
const timer=new Date();
var dispmin,disphour;
// var disptime=timer.getHours()+":"+timer.getMinutes();
// console.log(disptime);
document.querySelector(".type").addEventListener('input',function(event){
    if(status==0)
        {
            minutes=event.target.value;
            // console.log(minutes);
            cdsec=minutes*60;
            countdown(cdsec);
            status=1;
        }
});
for(let i=0;i<mitem.length-1;i++)
{      
        mitem[i].addEventListener("click",function(){
            if(status==0){
                switch (this.id) {
                    case "1":
                        minutes=1/3;
                        break;
                    case "2":
                        minutes=5;
                        break;
                    case "3":
                        minutes=15;
                        break;
                    case "4":
                        minutes=20;
                        break;
                    case "5":
                        minutes=30
                        break;
                  default:
                      break;
              }
                if(minutes==1/3)
                dispmin=timer.getMinutes();
                else
                dispmin=timer.getMinutes()+minutes;

                disphour=timer.getHours();
                
                if(dispmin>=60)
                {   
                    disphour++;
                    if(disphour>23)
                    {
                        disphour=00;
                    }
                    dispmin=dispmin%60;
                }
                
                if(dispmin<10)
                {
                    disptime=disphour+":0"+dispmin;
                
                }
                else
                    disptime=disphour+":"+dispmin;
                
                // console.log(disptime);    
                disptimer.innerText=`Be back at ${disptime}`;
                // console.log(disptimer);
                cdsec=minutes*60;
                countdown(cdsec);
                status=1;

            }
           
        });
    
}
function countdown(cdsec){
    // console.log(cdsec);
    const myinterval=setInterval(function(){
        var shmin=parseInt(cdsec/60);
        var shsec=parseFloat(cdsec%60);
        --cdsec;
        if(cdsec<9)
        cd.innerHTML=`${shmin}:0${shsec}`;
        else
        cd.innerHTML=`${shmin}:${shsec}`;
        if(shmin==0&&shsec==0)
        {
            disptimer.innerText="Choose your Settings";
            status=0;
            clearInterval(myinterval);
        }
    },1000)
}
