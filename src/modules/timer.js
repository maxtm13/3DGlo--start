const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let timerStart = null;

  const getTimeRemaining = () => {
    let dateNow = new Date().getTime();
    let dateStop = new Date(deadline).getTime();
    let deltaTime = Math.floor((dateStop - dateNow) / 1000);
    let seconds = deltaTime % 60;
    let minutes = Math.floor((deltaTime / 60) % 60);
    let hours = Math.floor(deltaTime / 60 / 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    if (deltaTime <= 0) {
      seconds = "00";
      minutes = "00";
      hours = "00";
    }
    return {
      deltaTime,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    if (timerStart === null) {
      timerStart = setInterval(updateClock, 1000);
    }

    if (getTime.deltaTime <= 0) {
      clearInterval(timerStart);
      timerStart = null;
    }
  };
  updateClock();
};
export default timer;
