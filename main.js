const hor = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const second = document.querySelector('.second');

function updateTime() {
hor.innerHTML=''
minutes.innerHTML=''
second.innerHTML=''
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    
    
    hor.textContent = hour < 10 ? '0' + hour : hour;
    minutes.textContent = min < 10 ? '0' + min : min;
    second.textContent = sec < 10 ? '0' + sec : sec;



}
updateTime()
setInterval(updateTime,1000)


// Initial call to set the time immediately when the page loads
// updateTime();



// function time(){
// hor.textContent=1
//     const logi=setInterval(function(){



//   },1000)  
// }







// Update the time every second (1000 milliseconds)

// setInterval(updateTime, 1000);
// const whole=document.querySelector('.hole')
// // setTimeout(()=>whole.style.display='none',3000)
// const now =new Date()
// const option={
//     hour:'numeric',
//     minute:'numeric',
//     day:'numeric',
// month:'long',
// year:'numeric',
// weekday:'long'
// }
// const locale=navigator.language
// console.log(``) ;
// const rad=new Intl.DateTimeFormat(locale,option).format(now)
// console.log(rad) ;



// timer --


// let time = 120;

// const log = function() {
//   const intervalId = setInterval(function() {
//     const minute = Math.trunc(time / 60);
//     const second = time % 60;
//     console.log(`${minute}:${second < 10 ? '0' : ''}${second}`);
//     time--;

//     if (time < 0) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// };

// log();
const label=document.querySelector('.label')

const start=function(){
    label.innerHTML=''

const tic=function(){
    const mi=String(Math.trunc(time/60))
    const sec=String(Math.trunc(time%60));
label.textContent= `${mi}:${sec}`;
if(time < 0){
label.textContent=`it's time to rest go and take a break`
label.classList.remove('animate-bounce')
}
time--;

}
let time=10;
tic()
const sr=setInterval(tic,1000)
return sr

}
start()