const formStopInterval = document.querySelector('#form-stop-interval');
const buttonStopInterval = document.querySelector('#stop-interval');

let intervalID = null;

window.addEventListener('load', () => {
  setTimeout(() => {
    invokeFunctionEverySpecificTime(
      () => changeTextColor('p.colored-text', generateRandomCSSColor()),
      1
    );
  }, convertSecondsToMiliseconds(3));
});

formStopInterval.addEventListener('submit', (e) => e.preventDefault());

buttonStopInterval.addEventListener(
  'click',
  stopInvokedFunctionAfterSpecificTime
);

function invokeFunctionEverySpecificTime(func, seconds) {
  const miliseconds = convertSecondsToMiliseconds(seconds);
  intervalID = setInterval(func, miliseconds);
}

function stopInvokedFunctionAfterSpecificTime() {
  const inputValueInterval = document.querySelector('#value-interval').value;
  const miliseconds = convertSecondsToMiliseconds(inputValueInterval);
  setTimeout(() => clearInterval(intervalID), miliseconds);
}

function convertSecondsToMiliseconds(seconds) {
  return seconds * 1000;
}

function changeTextColor(selector, color) {
  const element = document.querySelector(selector);
  element.style.color = color;
}

function generateRandomCSSColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}