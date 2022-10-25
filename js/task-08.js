const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", onButtonSub);

// function onButtonSub(event) {
//   event.preventDefault();

//   const formDataElements = event.currentTarget.elements;

//   const email = formDataElements.email.value;
//   const password = formDataElements.password.value;

//   if (email === "" || password === "") {
//     return alert("Все поля должны быть заполнены!");
//   }
//   const formData = { email, password };
//   console.log(formData);

//   event.currentTarget.reset();
// }

const form = document.querySelector(".login-form");

form.addEventListener("submit", buttonSubmit);

function buttonSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const userDetails = { email: email.value, Password: password.value };

  console.log(userDetails);
  event.currentTarget.reset();
}
