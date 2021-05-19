// saved todos
const todos = [];

const addButton = document.querySelector("#add-button");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const buttonDone = document.querySelector("#button-done");
const buttonOpen = document.querySelector("#button-open");
const buttonAll = document.querySelector("#button-all");
const buttonRemove = document.querySelector("#button-delete");

/**
 * Create list item for todos in todo list
 */

function addTodo() {
  const newTodoText = todoInput.value;

  const newTodo = {
    todo: newTodoText,
    done: false,
  };

  todos.push(newTodo);
  todoInput.value = "";

  const newTodoLi = document.createElement("li");
  newTodoLi.setAttribute("class", "list-group-item");
  // Zusätzliches property of LI element erzeugen
  newTodoLi.todo = newTodo;
  newTodoLi.innerText = newTodoText;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "form-check-input me-1");
  newTodoLi.appendChild(checkbox);

  newTodoLi.todo = newTodo;

  todoList.appendChild(newTodoLi);
}

function newTodoOnEnterKey(event) {
  if (event.KeyCode === 13) {
    addTodo();
  }
}

function filterDone() {
  const list = document.querySelector("#todo-list");
  for (let li of list.children) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    if (isChecked === false) {
      li.hidden = true;
    }
  }
}

function filterOpen() {
  const list = document.querySelector("#todo-list");
  for (let li of list.children) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    if (isChecked === true) {
      li.hidden = true;
    }
  }
}

function filterAll() {
  const list = document.querySelector("#todo-list");
  for (let li of list.children) {
    const checkbox = li.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    if (isChecked === false && isChecked === false) {
      li.hidden = false;
    }
  }
}

function init() {
  addButton.addEventListener("click", addTodo);
  buttonDone.addEventListener("click", () => {
    filterAll();
    filterDone();
  });
  buttonOpen.addEventListener("click", () => {
    filterAll();
    filterOpen();
  });
  buttonAll.addEventListener("click", filterAll);
}
init();

// radio buttons ansprechen
document.querySelector("#radio-done").addEventListener("change", showDoneTodos);
document.querySelector("#radio-open").addEventListener("change", showOpenTodos);
document.querySelector("#radio-all").addEventListener("change", showAllTodos);

const radioContainer = document.querySelector("#radio-container");
radioContainer.addEventListener("change", filterTodos);

deleteButton.addEventListener("change");

/**
 *
 * Filter todo list when radio button selection
 */

function filterTodos(e) {
  switch (e.target.caue) {
    case "done":
      showDoneTodos();
      break;
    case "open":
      showOpenTodos();
      break;
    case "all":
      showAllTodos();
      break;
  }
}

// Done tasks durchstreichen

todoList.addEventListener("change", changeTodoStyle);
function changeTodoStyle(e) {
  console.log(e.target.checked);
  if (e.target.checked === true) {
    //e.target.parentElement.style.textDecoration = "line-thorugh";
    e.target.parentElement.classList.add("done");
  } else {
    //e.target.parentElement.style.textDecoration = "none";
    e.target.parentElement.classList.remove("done");
  }
}

// delete button in html to remove done todos

function removeDoneTodos() {
  const children = todoList.children;
  const length = children.length - 1;

  for (let i = length; i >= 0; i--) {
    children[i].remove();
  }
}

/** 
function toggleTodo(e) {
  // filtere auf die checkbox
  if (e.target.tagName === "INPUT") {
    // checkbox element holen
    const checkbox = e.target;
    // checked status der checkbox ermitteln --> boolean
    const todoState = checkbox.checked;

    // Elternelement der Checkbox holen
    // vom LI die Referenz auf todo object holen
    const todoForLi = checkbox.parentElement.todo;
    todoForLi.done = todoState;
  }
}

todoList.addEventListener("change", toggleTodo);
*/

/**
function createTodoElementInList(todo) {
  const todoListEl = document.querySelector("#todos");

  const newTodo = document.createElement("li");
  newTodo.innerText = inputFieldValue;
  newTodo.setAttribute("data-todo", todo);
  newTodo.classList.add("list-group-item");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("class", "form-check-input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkboxNoLabel");

  todoListEl.appendChild(newTodo);
  newTodo.appendChild(checkbox);
}

/**
 * change text of todo badge // TODO: variablen name anpassen
 
function addTodo() {
  let inputFieldValue = document.getElementById("todoInputField").value;
  if (inputFieldValue.length > 5) {
    todos.push(inputFieldValue);
    createTodoElementInList(inputFieldValue);
  }
}

/**
 * Save todo from input to todo list
 
function init() {
  const addButton = document.querySelector("#addButton");

  addButton.addEventListener("click", addTodo);
}
init();

/**
 * // Objekte um Daten zu speichern
 * const todo = {
 * todo: "Learn JS",
 * done: false,
 * };
 *
 * // Classes
 * const arr = [1, 2, 3];
 * console.log(arr);
 *
 * // new Keyword
 * // Array Funktion (großgeschrieben)
 * // Constructor Funktionen
 * const arr2 = new Array(1, 2, 3);
 * console.log(arr2);
 *
 * // class Keyword
 * class Todo {
 *  constructor() {
 *    console.log("Constructor");
 *  }
 * }
 *
 *
 */
