const selectMenu = document.querySelectorAll("select")
const btnn = document.querySelector("button")
const timer= document.getElementById("timer")

let alarmTime, isAlarmset=false
let ringtone = new Audio("./mixkit-retro-game-emergency-alarm-1000.wav")

for(let i=1;i<=12;i++){
    i=i<10 ? "0"+i : i
    const option = document.createElement("option");
    option.innerText=i
    option.setAttribute("value",i)
    // console.log(option)
    selectMenu[0].appendChild(option)
}
for(let i=0;i<=59;i++){
    i=i<10 ? "0"+i : i
    const option = document.createElement("option");
    option.innerText=i
    option.setAttribute("value",i)
    // console.log(option)
    selectMenu[1].appendChild(option)
}

for(let i=1;i<=2;i++){
    let ampm=i==1?"AM":"PM";
    const option = document.createElement("option");
    option.innerText=ampm
    option.setAttribute("value",ampm)
    selectMenu[2].appendChild(option)

}

setInterval(()=>{
    // getting hours minutes and seconds

    let date  = new Date();
    h= date.getHours();
    m= date.getMinutes();
    s=date.getSeconds();
    ampm="AM";

    if(h>=12){
        h=h-12;
        ampm="PM"
    }

    h=h==0?h=12:h;
    h=h<10?"0"+h: h;
    m=m<10?"0"+m: m;
    s=s<10?"0"+s: s;

    timer.innerText=`${h}:${m}:${s} ${ampm}`

    if(alarmTime==`${h}:${m} ${ampm}`){
        console.log("ringing")
        ringtone.play()

    }
},1000)


// Alarm set

const setAlarm=()=>{
    if(isAlarmset){
        alarmTime=""
        ringtone.pause()
        selectMenu[0].setAttribute("disabled","false")
    selectMenu[1].setAttribute("disabled","false")
    selectMenu[2].setAttribute("disabled","false")
    btnn.innerText="Set Alarm"
    return isAlarmset=false;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    console.log(time)
    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please select a valid time");
    }
    isAlarmset=true;
    alarmTime=time;
    console.log(alarmTime)
    selectMenu[0].setAttribute("disabled","true")
    selectMenu[1].setAttribute("disabled","true")
    selectMenu[2].setAttribute("disabled","true")

    btnn.innerText="Clear Alarm"
  
}

btnn.addEventListener("click",setAlarm)