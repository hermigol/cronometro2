let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  startTime = Date.now();
  displayTime(elapsedTime);
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((time % 1000) / 10);
  
  const formattedTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  document.getElementById('display').innerText = formattedTime;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}
