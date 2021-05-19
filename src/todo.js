export class Todo {
  constructor(newTodo, done) {
    this.todo = newTodo;

    this.done = false;
    if (done !== undefined) {
      this.done = done;
    }
  }

  setDoneState(state) {
    this.done = state;
  }

  // markAsDone() {
  //   this.done = true;
  // }

  // markAsOpen() {
  //   this.done = false;
  // }

  changeTodo(newTodoText) {
    this.todo = newTodoText;
  }
}
