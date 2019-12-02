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
    }
    displayTime();
  }
  
  function displayTime() {
    let timer = document.getElementById("time-remaining");
    timer.innerHTML = min + ":" + sec;
  }
  })();
  