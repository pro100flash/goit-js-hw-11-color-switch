const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timerId = null;

  function changeColor() {
    timerId = setInterval(() => {
      refs.body.style.backgroundColor = 
      colors[randomIntegerFromInterval(0, colors.length -1)];
    }, 1000);
    
    refs.startBtn.disabled = true;
  };

  function onButtonStop() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
  }

  refs.startBtn.addEventListener('click', changeColor);
  refs.stopBtn.addEventListener('click', onButtonStop);