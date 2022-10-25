const keyTodos = "todos";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
if (localStorage.getItem(keyTodos) !== null) {
  JSON.parse(localStorage.getItem(keyTodos));
  todos.forEach(createTodoElem);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todo = {
    id: Date.now().toString(),
    text: todoInput.value,
  };
  createTodoElem(todo);
  todos.push(todo);
  localStorage.setItem(keyTodos, JSON.stringify(todos));

  todoInput.value = "";
});

function createTodoElem(todo) {
  const todoElem = document.createElement("li");
  todoElem.id = todo.id;
  const todoText = document.createElement("span");
  todoText.textContent = todo.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function (event) {
    const todoElem = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== todoElem.id);
    localStorage.setItem(keyTodos, JSON.stringify(todos));
    todoElem.remove();
  });

  todoElem.appendChild(todoText);
  todoElem.appendChild(deleteBtn);
  todoList.appendChild(todoElem);
}
