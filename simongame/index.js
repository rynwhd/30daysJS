var index=0;
var ans=[];
var ans1;
var iscorr=1;
var Gaudio= new Audio("sounds/green.mp3");
var Raudio= new Audio("sounds/red.mp3");
var Yaudio= new Audio("sounds/yellow.mp3");
var Baudio= new Audio("sounds/blue.mp3");
var wrong= new Audio("sounds/wrong.mp3")
$(document).keypress(function(){
    var x=event.key;
    if(event.key=='q')
    {
        ready();
    }    
});
function ready(){
    $("h1").text("Level "+(index+1));
    index++; 
    console.log(index);
    prompt();
}
function prompt(){
    
    let z= Math.floor(Math.random()*4);
    
    
    if(z==0){
        ans.push('s');
        called('s')
    }
    if(z==1){
        ans.push('d');
        called('d')
    }
    if(z==2)
    {
        ans.push('j');
        called('j');
    }
    if(z==3){
        
        ans.push('k');
        called('k');
    }
    answer();
}

function answer()
{

    $(document).keypress(function(){

            ans1.push(event.key);

        console.log(ans);
        console.log(ans1);
        check();
    });
}
function check()
{
        for (let l = 0; l < ans.length; l++) {
            if(ans[l]!=ans1[l])
            {
                iscorr=0;
            }    
        }
        if(iscorr==1)
        {
            $(document).unbind("keypress");
            ready();
        }
        else
        {
                $("h1").text("Wrong");
                setTimeout(function(){
                    location.reload();
                },5000)
                wrong.play();
        }

    }
function called(y){
    switch (y) {
        case 's':
           
                $(".green").addClass("pressed");
                Gaudio.play();
                setTimeout(function(){$(".green").removeClass("pressed");},100);
           
            break;
        case 'd':
            
                $(".yellow").addClass("pressed");
                Yaudio.play();
                setTimeout(function(){$(".yellow").removeClass("pressed");},100);
            
            break;
        case 'j':
            
                $(".red").addClass("pressed");
                Raudio.play();
                setTimeout(function(){$(".red").removeClass("pressed");},100);
           
            break;
        case 'k':
            
                $(".blue").addClass("pressed");
                Baudio.play();
                setTimeout(function(){$(".blue").removeClass("pressed");},100);
            
            break;   
        default:
            break;
    }
    return;
}