(function() {
  let sec = 4;
  let min = 0;
  let startButton = document.getElementById("start-btn");
  let stopButton = document.getElementById("stop-btn");
  let resetButton = document.getElementById("reset-btn");
  
  
  startButton.addEventListener("click", function() {
    timer = setInterval(timerHandler, 1000);
    resetButton.disabled = true;
  });
  
  stopButton.addEventListener("click", function() {
    timer = clearInterval(timer);
    console.log("stop button clicked");
    resetButton.disabled = false;
  });
  
  resetButton.addEventListener("click", function() {
    console.log('reset button clicked')
    startButton.disabled = false;
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

  //------------------------------------------------------------//
  
  let secBreak = 5;
  let minBreak = 0;
  let startButtonBreak = document.getElementById("start-btn-break")
  let stopButtonBreak = document.getElementById("stop-btn-break")
  let resetButtonBreak = document.getElementById("reset-btn-break")

  startButtonBreak.addEventListener("click", function() {
    breakTimer = setInterval(timerHandlerBreak, 1000);
    resetButtonBreak.disabled = true;
  });
  
  stopButtonBreak.addEventListener("click", function() {
    breakTimer = clearInterval(breakTimer);
    console.log("stop button clicked");
    resetButtonBreak.disabled = false;
  });
  
  resetButtonBreak.addEventListener("click", function() {
    console.log('reset button clicked')
    startButtonBreak.disabled = false;
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
      alert("Start your next work session!")
    }
    displayTimeBreak();
  }
  
  function displayTimeBreak() {
    let breakTimer = document.getElementById("time-remaining-break");
    breakTimer.innerHTML = minBreak + ":" + secBreak;
  }

  
  })();
  