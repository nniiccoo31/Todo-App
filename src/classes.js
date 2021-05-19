/**
 * Erste Alternative
 */

const newTodo = {
  todo: "Learn Classes",
  done: false,
};

class Todo {
  constructor() {
    this.todo = "Learn whatever";
    this.done = false;
  }
}

const newTodo2 = new Todo();
// { todo: "Learn whatever", done: false }

/**
 * Zweite Alternative
 */
class Todo2 {
  constructor(newTodo) {
    this.todo = newTodo;
    this.done = false;
  }

  // Aufruf der Funktion für Todo als Done markieren
  markAsDone() {
    this.done = true;
  }

  // Text verändern des Todos
  changeTodo(newTodoText) {
    this.todo = newTodoText;
  }
}

// bei aufruf mit bew wird immer die neue Instanz
// des erstellten Objekts zurückgegeben
const todo1 = new Todo2("Learn Classes");
const todo2 = new Todo2("Learn JavaScript");
todo1.changeTodo("Learn better something else");

todo1.markAsDone();
