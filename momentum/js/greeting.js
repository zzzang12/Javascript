const keyUserName = "userName";
const classHidden = "hidden";

const loginForm = document.querySelector("#login-form");
const inputBox = loginForm.querySelector("input[type=text]");
const inputSubmit = loginForm.querySelector("input[type=submit]");
const greetingText = document.querySelector("#greeting");

const savedUserName = localStorage.getItem(keyUserName);
if (savedUserName === null) {
  loginForm.classList.remove(classHidden);
} else {
  printGreeting();
}

function printGreeting() {
  loginForm.classList.add(classHidden);
  const userName = localStorage.getItem(keyUserName);
  greetingText.textContent = `Hello ${userName}`;
  greetingText.classList.remove(classHidden);
}

inputSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const userName = inputBox.value;
  localStorage.setItem(keyUserName, userName);
  printGreeting();
});
