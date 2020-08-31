"use strict";
// the to do list class 
// has a title then 
// an array of to do's 
// add to-do with a type error condition if its not a to-do type

// size method that returns the length and the
// number of to-dos

// A first function that returns the first to-do
// A last function that returns the las to-do 
// an item at function that returns the item at a certain index. 


// A Mark done at function that marks the to-do done  
// A Mark undone at function that marks an item done at a certain to-do index or name?
// And is done function checking if the to do is done
// Shift function that shift the to do
// A custom pop function to pop the to do list
// A remove at function that returns the to do removed
// A to string function displays the list.
// A for each function and a filter function.
// And a validate index function

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

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  
  addTodo (toDo) {
    if (!(toDo instanceof Todo)) {
      throw new TypeError('The toDo is not of type Todo.');
    }
    this.todos.push(toDo);
  }
  
  size() {
    return `${this.todos.length} things to do.`;
  }
  
  first() {
    return this.todos[0];
  }
  
  last() {
    return this.todos[0];
  }
  
  itemAt(index) {
    return this.todos[index];
  }
  
  markDoneAt(index) {
    this.todox[index].markDone();
  }
  
  markUndoneAt (index) {
   this.todos[index].markUndone();
  }
  
  isDone(index) {
    this.todos[index].isDone();
  }
  
  shift() {
    return this.todos.shift();
  }
  
  pop() {
    return this.todos.pop();
  }
  
  removeAt(index) {
    return this.todos.splice(index, 1);
  }
  
  toString() {
    return this.todos.map(todo => todo.toString());
  } 
  
  
}

let myTodoList = new TodoList("Andy's ToDos");
myTodoList.addTodo(new Todo('do tests'));
myTodoList.addTodo(new Todo('do tests'));
myTodoList.addTodo(new Todo('do tests'));
myTodoList.addTodo(new Todo('do tests'));
console.log(myTodoList.toString());


