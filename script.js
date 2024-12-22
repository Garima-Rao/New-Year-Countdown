date=document.getElementsByClassName("date")[0];
today=document.getElementsByClassName("today")[0];
din=document.getElementsByClassName("days")[0]
hr=document.getElementsByClassName("hours")[0]
min=document.getElementsByClassName("minutes")[0]
seconds=document.getElementsByClassName("sec")[0]
video=document.getElementsByTagName("video")[0]
hny=document.getElementsByClassName("HNY")[0]
body=document.getElementsByTagName("body")[0]

let nowDate=new Date().toDateString();
today.innerHTML=nowDate;
today.style.fontWeight="700"
today.style.fontSize="18px"
function updateTime(){
     let time=new Date();
     let currentYear = time.getFullYear();
     let newYear = new Date(currentYear + 1, 0, 1);
     let remainingTime = newYear - time;

     let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
     let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
     let sec = Math.floor((remainingTime % (1000 * 60)) / 1000);
     din.innerHTML=days;
     hr.innerHTML=hours;
     min.innerHTML=minutes;
     seconds.innerHTML=sec
     date.style.fontWeight="600";
     date.style.fontSize="30px";
     hny.style.display="none";
     if (time.getMonth() === 0 && time.getDate() === 1){
        hny.style.display="block";
        body.style.backgroundImage=`url(${"6ob.gif"})`;
        
     } 
};
setInterval(updateTime,1000);

 
