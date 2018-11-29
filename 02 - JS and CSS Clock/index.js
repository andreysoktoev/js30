window.onload = function () {
  document.querySelector('.clock').style.opacity = 1;
  document.querySelector('.clock_center').style.opacity = 1;
}

function setDate() {
  const now = new Date();
  const secondsDegree = now.getSeconds() / 60 * 360;
  const minutesDegree = now.getMinutes() / 60 * 360;
  const hoursDegree = now.getHours() / 12 * 360;
  document.querySelector('.seconds').style.transform = `rotate(${secondsDegree}deg)`;
  document.querySelector('.minutes').style.transform = `rotate(${minutesDegree}deg)`;  
  document.querySelector('.hours').style.transform = `rotate(${hoursDegree}deg)`;
}

const x = setInterval(setDate, 1000);
function stopClock() {
  clearInterval(x);
}