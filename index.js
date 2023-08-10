const clock = document.querySelector(".clock");

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;
let isStarted = false;
const Startwatch = () => {
  if (isStarted) {
    return;
  }
  isStarted = true;
  intervalId = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      sec = 0;
      min++;
    }

    const second = String(sec).padStart(2, "0");
    const minute = String(min).padStart(2, "0");
    const hours = String(hr).padStart(2, "0");

    clock.innerHTML = `${hours}:${minute}:${second}`;
  }, 1000);
};

const Stopwatch = () => {
  clearInterval(intervalId);
  isStarted = false;
};

const Resetwatch = () => {
  sec = 0;
  min = 0;
  hr = 0;
  clearInterval(intervalId);
  isStarted = false;
  const second = String(sec).padStart(2, "0");
  const minute = String(min).padStart(2, "0");
  const hours = String(hr).padStart(2, "0");
  clock.innerHTML = `${hours}:${minute}:${second}`;
};
