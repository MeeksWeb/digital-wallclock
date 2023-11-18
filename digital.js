const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");


function clockLoad() {
    const auto = new Date()
    const hrs = auto.getHours() % 12
    const mins = auto.getMinutes()
    const secs = auto.getSeconds()
    console.log(hrs % 12)
    
    // hours
    if (hrs < 10) {
    hours.innerHTML = "0" + hrs
    }else {
    hours.innerHTML = hrs
    }
    
    // minutes
    if (mins < 10) {
        minutes.innerHTML = "0" + mins
    }  else {
        minutes.innerHTML = mins
    }

    // seconds
    if (secs < 10) {
        seconds.innerHTML = "0" + secs
    }  else {
        seconds.innerHTML = secs
    }

}

console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(new Date().getDate())


setInterval(clockLoad, 1000);


