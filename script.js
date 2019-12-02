let timer = setInterval(timerHandler, 1000);
let sec = 0;
let min = 25;


let startButton = document.getElementById('start-btn')

startButton.addEventListener('click', function(){
    timer = setInterval(timerHandler, 1000)
})

let stopButton = document.getElementById('stop-btn')
    stopButton.addEventListener('click', function(){
        timer = clearInterval(timer)
        console.log('stop button clicked')
    })

function timerHandler(){
 if (sec >= 1) {
    sec--
} else {
    sec = 59
    min--
   
} if (sec < 10){
    sec = "0" + sec
} if (min && sec < 2){
    min = 25
    sec = 0
}
displayTime()
}

function displayTime(){
    let timer = document.getElementById('time-remaining')
    timer.innerHTML = min + ":" + sec;
    
}



