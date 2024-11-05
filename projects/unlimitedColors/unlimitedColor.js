//generate random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';//hex color
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];//add six random index
    }
    console.log(color);
    return color;
  };
  let intervalId;
  startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.querySelector('body').style.backgroundColor = randomColor();
    }
  };
  document.getElementById('start').addEventListener('click', startChangingColor);
  
  stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.getElementById('stop').addEventListener('click', stopChangingColor);
  