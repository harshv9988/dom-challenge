var count = 0;
var isStarted = false;
let q = document.querySelector("#disp");

const startProgress = (cId, time) => {
  let child = document.querySelector(cId);

  outSourceLogic(time, child);
};

const outSourceLogic = (timeInterval, child) => {
  let width = 0;
  let timer = setInterval(() => {
    width += 1;
    child.style.width = width + "%";
    if (width > 100) {
      clearInterval(timer);
      decrement();
      if (count > 0) {
        outSourceLogic(timeInterval, child);
      } else {
        child.style.width = 0;
        isStarted = false;
      }
    }
  }, timeInterval / 100);
};

const onClick = () => {
  increment();
  if (isStarted) return;
  isStarted = true;
  startProgress("#child", 100);
};

const increment = () => {
  count += 1;
  q.innerText = count;
};

const decrement = () => {
  count -= 1;
  q.innerText = count;
};
