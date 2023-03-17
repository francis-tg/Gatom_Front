export function idleTime(count = 5, callback) {
  let idleTime = 0;
  const idleInteval = setInterval(timerIncrement, 6000);
  function timerIncrement() {
    idleTime++;
    if (idleTime > count) {
      // si l'utilisateur est inactif depuis plus de 2 minutes
      clearInterval(idleInteval);
      callback(count);
    }
  }
  function renitializeCount() {
    idleTime = 0;
  }
  document.addEventListener("touchstart", renitializeCount);
  document.addEventListener("touchmove", renitializeCount);
}
