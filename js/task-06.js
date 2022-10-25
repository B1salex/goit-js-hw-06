// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */
}
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//     border: 3px solid #bdbdbd;
//   }

//   #validation-input.valid {
//     border-color: #4caf50;
//   }

//   #validation-input.invalid {
//     border-color: #f44336;
//   }

let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function () {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
};

// const inputEl = document.querySelector('[data-length="6"]');
// inputEl.addEventListener("blur", onAddClass);

// function onAddClass(event) {
//   const textContentLength = event.currentTarget.value.length;
//   if (textContentLength !== Number(inputEl.dataset.length)) {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   } else {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   }
// }
