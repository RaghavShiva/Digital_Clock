const scs=document.querySelector('.scs');
const mns=document.querySelector('.mns');
const hs=document.querySelector('.hs');
function getTime(){
    const dt=new Date();
    let secs=dt.getSeconds();
    let mins=dt.getMinutes();
    let hrss=dt.getHours();
    const time = document.querySelector(".time");
    let dn="AM";
    if(hrss>12){
        dn="PM";
        hrss-=12;
    }
    if(secs<10){
        secs="0"+secs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(hrss<10){
        hrss="0"+hrss;
    }
    time.textContent = hrss+":"+mins+":"+secs+" "+dn;
   

}
setInterval(getTime,100);