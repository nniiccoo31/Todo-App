import { Todo } from "./todo.js";

const todos = [];

window.todos = todos;

const addButton = document.querySelector("#add-button");
const todoInput = document.querySelector("#todo-input");

addButton.addEventListener("click", function (e) {
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = new Todo(newTodo);
  todos.push(newTodoObj);

  renderTodos();
});

function renderTodos() {
  const todoList = document.querySelector("#todo-list");
  // TODO: make it work better (LOL)
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.todo = todo;
    li.innerText = todo.todo;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.done;
    li.append(checkbox);

    todoList.appendChild(li);
  });
}

const todoList = document.querySelector("#todo-list");
todoList.addEventListener("change", function (e) {
  const isDone = e.target.checked;
  const li = e.target.parentElement;
  const todoObj = li.todo;
  todoObj.setDoneState(isDone);
});

// Debugging Setup
todos.push(new Todo("css", true));
todos.push(new Todo("js"));
todos.push(new Todo("git"));
renderTodos();
