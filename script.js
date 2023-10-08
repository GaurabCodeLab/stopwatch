const input = document.querySelector(".input");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const time = document.querySelector(".time");
let minute = 0;
let second = 0;
let centiSecond = 0;
let id;


startBtn.addEventListener("click", ()=>{
   startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
     id = setInterval(()=>{
        centiSecond = centiSecond + 1;
        if(centiSecond>99){
         centiSecond = 0;
         second = second + 1;
        }
        if(second>59){
         second = 0;
         minute = minute + 1;
        }
        const modifiedMinute = minute.toString().padStart(2, "0");
        const modifiedSecond = second.toString().padStart(2, "0");
        const modifiedCentisecond = centiSecond.toString().padStart(2, "0");
        input.value = modifiedMinute + ":" + modifiedSecond + ":" + modifiedCentisecond;
     }, 10)

})

stopBtn.addEventListener("click", ()=>{
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    console.log(id);
    clearInterval(id);
})

resetBtn.addEventListener("click", ()=>{
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    minute = 0;
    second = 0;
    centiSecond = 0;
    clearInterval(id);
    input.value = "00:00:00";
})

setInterval(()=>{
    const today = new Date;
    const date = today.getDate();
    const modifiedDate = date.toString().padStart(2, "0");
    const month = today.getMonth()+1;
    const modifiedMonth = month.toString().padStart(2,"0");
    const year = today.getFullYear();
    let hour = today.getHours();
    if(hour>12){
       hour = hour - 12;
    }
    const modifiedHour = hour.toString().padStart(2, "0");
    const minute = today.getMinutes();
    const modifiedMinute = minute.toString().padStart(2, "0");
    const second = today.getSeconds();
    const modifiedSecond = second.toString().padStart(2, "0");
    const timeAndDate = `${modifiedDate}-${modifiedMonth}-${year} ${modifiedHour}:${modifiedMinute}:${modifiedSecond}`;
    time.textContent = timeAndDate;
}, 1000)













































// const today = new Date; //Sun Oct 08 2023 01:44:26 GMT+0530 (India Standard Time)
// const year = today.getFullYear(); //2023
// console.log(year);
// const month = today.getMonth(); //9
// console.log(month+1);
// const day = today.getDay(); //0
// console.log(day);
// const date = today.getDate(); //8
// console.log(date);
// const hour = today.getHours(); //1
// console.log(hour);
// const minute = today.getMinutes();
// console.log(minute); //44
// const second = today.getSeconds();
// console.log(second); //26
// const milliSecond = today.getMilliseconds(); //359
// console.log(milliSecond); 
// const time = today.getTime(); //1696709586284, Returns the stored time value in milliseconds since midnight, January 1,1970 UTC.
// console.log(time);