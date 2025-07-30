const body = document.body;
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;

const startChange = start.addEventListener("click", function (e) {
 if (!intervalId) {
    intervalId =  setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 500);
 }
});

const stopChange = stop.addEventListener("click", function (e) {
  clearInterval(intervalId);
  intervalId = null;
});
