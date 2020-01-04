(function() {
  //Work Session Timer
  const audio = new Audio("sound.wav");
  const WORK_SECONDS = 45 * 60;
  const BREAK_SECONDS = 15 * 60;

  let isWorkModeActive = true;
  let workTotalSeconds = WORK_SECONDS;
  let breakTotalSeconds = BREAK_SECONDS;
  let breakSeconds = 0;
  let breakMinutes = 5;

  let workRadioButton = document.getElementById("work-mode");
  let breakRadioButton = document.getElementById("break-mode");

  let workStartButton = document.getElementById("start-btn");
  let workStopButton = document.getElementById("stop-btn");
  let workResetButton = document.getElementById("reset-btn");
 
  let breakStartButton = document.getElementById("start-btn-break");
  let breakStopButton = document.getElementById("stop-btn-break");
  let breakResetButton = document.getElementById("reset-btn-break");
  

  if (isWorkModeActive) {
    setToWorkMode();
  } else {
    setToBreakMode();
  }

  workRadioButton.addEventListener("click", function() {
    setToWorkMode();
  });

  breakRadioButton.addEventListener("click", function() {
    setToBreakMode();
  });

  function setToWorkMode() {
    console.log("click event!");
    isWorkModeActive = true;
    breakStartButton.disabled = true;
    breakStopButton.disabled = true;
    breakResetButton.disabled = true;
    document.getElementById("break-header").style.opacity = "0.5";
    document.getElementById("time-remaining-break").style.opacity = "0.5";

    workStartButton.disabled = false;
    workStopButton.disabled = false;
    workResetButton.disabled = false;
    document.getElementById("work-header").style.opacity = "1";
    document.getElementById("time-remaining").style.opacity = "1";
  }

  function setToBreakMode() {
    isWorkModeActive = false;
    workStartButton.disabled = true;
    workStopButton.disabled = true;
    workResetButton.disabled = true;

    document.getElementById("work-header").style.opacity = "0.5";
    document.getElementById("time-remaining").style.opacity = "0.5";

    breakStartButton.disabled = false;
    breakStopButton.disabled = false;
    breakResetButton.disabled = false;
    document.getElementById("break-header").style.opacity = "1";
    document.getElementById("time-remaining-break").style.opacity = "1";
  }

  workStartButton.addEventListener("click", function() {
    timer = setInterval(workTimerHandler, 1000);
    workResetButton.disabled = true;
    breakStartButton.disabled = true;
    breakStopButton.disabled = true;
    workRadioButton.disabled = true;
    breakRadioButton.disabled = true;
    workStartButton.disabled = true;
  });

  workStopButton.addEventListener("click", function() {
    timer = clearInterval(timer);
    console.log("stop button clicked");
    workResetButton.disabled = false;
    workRadioButton.disabled = false;
    breakRadioButton.disabled = false;
    workStartButton.disabled = false;
  });

  workResetButton.addEventListener("click", function() {
    console.log("reset button clicked");
    workStartButton.disabled = false;
    workTotalSeconds = WORK_SECONDS;
    displayWorkTime(workTotalSeconds)
    workResetButton.disabled = true;
  });

  function workTimerHandler() {
    workTotalSeconds -= 1;
    if (workTotalSeconds == 0) {
      timer = clearInterval(timer);
      workResetButton.disabled = false;
      workStartButton.disabled = true;
      audio.play();
    }
    displayWorkTime(workTotalSeconds);
  }

  function displayWorkTime(totalSeconds) {
    let workMinutes = Math.floor(totalSeconds / 60)
    let workSeconds = totalSeconds % 60;
    if (workSeconds < 10) {
      workSeconds = "0" + workSeconds;
    }
    let timer = document.getElementById("time-remaining");
    timer.innerHTML = workMinutes + ":" + workSeconds;
  }

  //Break Timer

  breakStartButton.addEventListener("click", function() {
    breakTimer = setInterval(breakTimerHandler, 1000);
    breakResetButton.disabled = true;
    workStartButton.disabled = true;
    workStopButton.disabled = true;
    workRadioButton.disabled = true;
    breakRadioButton.disabled = true;
    breakStartButton.disabled = true;
  });

  breakStopButton.addEventListener("click", function() {
    breakTimer = clearInterval(breakTimer);
    console.log("stop button clicked");
    breakResetButton.disabled = false;
    workRadioButton.disabled = false;
    breakRadioButton.disabled = false;
    breakStartButton.disabled = false;
  });

  breakResetButton.addEventListener("click", function() {
    console.log("reset button clicked");
    breakStartButton.disabled = false;
    document.getElementById("time-remaining-break").innerHTML = "5:00";
    breakTotalSeconds = BREAK_SECONDS;
    displayBreakTime(breakTotalSeconds);
    breakResetButton.disabled = true;
  });

  function breakTimerHandler() {
    breakTotalSeconds -= 1;
    if (breakMinutes == 0 && breakSeconds == 0) {
      breakTimer = clearInterval(breakTimer);
      breakResetButton.disabled = false;
      breakStartButton.disabled = true;
      audio.play();
    }
    displayBreakTime(breakTotalSeconds);
  }

  function displayBreakTime(totalSeconds) {
    let breakMinutes = Math.floor(totalSeconds / 60);
    let breakSeconds = totalSeconds % 60;
    if (breakSeconds < 10) {
      breakSeconds = "0" + breakSeconds;
    }
    let breakTimer = document.getElementById("time-remaining-break");
    breakTimer.innerHTML = breakMinutes + ":" + breakSeconds;
  }

  displayWorkTime(workTotalSeconds);
  displayBreakTime(breakTotalSeconds);
})();
