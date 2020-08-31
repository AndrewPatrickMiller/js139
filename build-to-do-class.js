"use strict";
// The to do class has a title for the to-do.
// And a flag representing if it's done or not.
// Static properties for the markers 'x'' '.
// The to do class also has methods for
// to  string 
// mark done 
// mark undone is done and 
// get title


class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';
  constructor(title) {
      this.title = title;
      this.done = false;
  }
  
  toString() {
    let marker = this.done ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }
  
  markDone() {
    this.done = true;
  }
  
  markUndone() {
    this.done = false;
  }
  
  isDone() {
    return this.done;
  }
  
  getTitle() {
    return this.title;
  }
}





let myTodo = new Todo('call anna');
console.log(myTodo.toString());