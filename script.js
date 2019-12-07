(function() {
  //Work Session Timer

  let sec = 0;
  let min = 25;
  let startButton = document.getElementById("start-btn");
  let stopButton = document.getElementById("stop-btn");
  let resetButton = document.getElementById("reset-btn");
  let workModeBtn = document.getElementById('work-mode');
  let breakModeBtn = document.getElementById('break-mode');
  let workModeActive = true;

  workModeBtn.addEventListener("click", function(){
    workModeActive = true;
    startButtonBreak.disabled = true;
    stopButtonBreak.disabled = true;
    resetButtonBreak.disabled = true;
    document.getElementById("break-header").style.opacity = "0.5";
    document.getElementById("time-remaining-break").style.opacity = "0.5";
  })

  

  startButton.addEventListener("click", function() {
    timer = setInterval(timerHandler, 1000);
    resetButton.disabled = true;
    startButtonBreak.disabled = true;
    stopButtonBreak.disabled = true;
  });

  stopButton.addEventListener("click", function() {
    timer = clearInterval(timer);
    console.log("stop button clicked");
    resetButton.disabled = false;
    startButtonBreak.disabled = false;
    stopButtonBreak.disabled = false;
  });

  resetButton.addEventListener("click", function() {
    console.log("reset button clicked");
    startButton.disabled = false;
    document.getElementById('time-remaining').innerHTML = "25:00";
    min = 25;
    sec = 1;
    resetButton.disabled = true;
  });

  function timerHandler() {
    if (sec >= 1) {
      sec--;
    } else {
      sec = 59;
      min--;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min == 0 && sec == 0) {
      timer = clearInterval(timer);
      resetButton.disabled = false;
      startButton.disabled = true;
    }
    displayTime();
  }

  function displayTime() {
    let timer = document.getElementById("time-remaining");
    timer.innerHTML = min + ":" + sec;
  }

  //Break Timer

  let secBreak = 0;
  let minBreak = 5;
  let startButtonBreak = document.getElementById("start-btn-break");
  let stopButtonBreak = document.getElementById("stop-btn-break");
  let resetButtonBreak = document.getElementById("reset-btn-break");

  startButtonBreak.addEventListener("click", function() {
    breakTimer = setInterval(timerHandlerBreak, 1000);
    resetButtonBreak.disabled = true;
    startButton.disabled = true;
    stopButton.disabled = true;
  });

  stopButtonBreak.addEventListener("click", function() {
    breakTimer = clearInterval(breakTimer);
    console.log("stop button clicked");
    resetButtonBreak.disabled = false;
    startButton.disabled = false;
    stopButton.disabled = false;
  });

  resetButtonBreak.addEventListener("click", function() {
    console.log("reset button clicked");
    startButtonBreak.disabled = false;
    document.getElementById('time-remaining-break').innerHTML = "5:00";
    minBreak = 5;
    secBreak = 1;
    resetButtonBreak.disabled = true;
  });

  function timerHandlerBreak() {
    if (secBreak >= 1) {
      secBreak--;
    } else {
      secBreak = 59;
      minBreak--;
    }
    if (secBreak < 10) {
      secBreak = "0" + secBreak;
    }
    if (minBreak == 0 && secBreak == 0) {
      breakTimer = clearInterval(breakTimer);
      resetButtonBreak.disabled = false;
      startButtonBreak.disabled = true;
    }
    displayTimeBreak();
  }

  function displayTimeBreak() {
    let breakTimer = document.getElementById("time-remaining-break");
    breakTimer.innerHTML = minBreak + ":" + secBreak;
  }
})();
