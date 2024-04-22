const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

/*const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}*/
const newSquaresWrapper = document.querySelector('.displayedsquare-wrapper');

function addElement(color) {
  // create a new div element
  const newSquare = document.createElement("div");
  newSquare.setAttribute("class", "displayedsquare");
  newSquare.style.backgroundColor = color;
  newSquaresWrapper.appendChild(newSquare);
}


function logAction(displayedColor, time) {
  const listElement = document.createElement("li");
  listElement.textContent = (`${time} created a new ${displayedColor} square`);
  const logList = document.querySelector("ul");
  logList.appendChild(listElement);
}

const clickOnSquare = (e) => {
  const computedStyle = getComputedStyle(e.target);
  const color = computedStyle.backgroundColor;
  const displayedColor =e.target.classList[1];
  addElement(color);
  logAction(displayedColor, getElapsedTime());
  alert (`This square is ${displayedColor}`);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function logSecondAction (time, key) {
  const listElement = document.createElement("li");
  listElement.textContent = (`${time} ${key} was pressed`);
  const logList = document.querySelector("ul");
  logList.appendChild(listElement);
}

function changeBackgroundColor() {
  const body = document.querySelector("body");
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
  logSecondAction('spacebar')
}

document.body.addEventListener("keypress", function(event) {
  if (event.code === "Space") {
    changeBackgroundColor();
  } else if (event.key === "l") {
    clearLog();
  } else if (event.key === "s") {
    clearSquares();
  }
});

function clearLog() {
  const logList = document.querySelector("ul");
  logList.innerHTML = "";
}  

function clearSquares() {
  const newSquaresWrapper = document.querySelector('.displayedsquare-wrapper');
  newSquaresWrapper.innerHTML = "";
}

