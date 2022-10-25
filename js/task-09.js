function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButton = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorValue = document.querySelector("span.color");

changeButton.addEventListener("click", (e) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
});

// const buttonEl = document.querySelector('.change-color');
// const valueColor = document.querySelector('.color');

// buttonEl.addEventListener('click', onChangeBodyColor);

// function onChangeBodyColor() {
//   const body = document.body;
//   valueColor.textContent = getRandomHexColor();
//   body.style.backgroundColor = valueColor.textContent;
// }
