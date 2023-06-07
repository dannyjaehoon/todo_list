import { Todo } from "../model/todo.js";

export class TodoService {
  constructor() {
    this.Todos = [];
  }

  createTodo(content) {
    let todo = new Todo(content);
    this.Todos.push(todo);
  }

  readTodo(id) {
    return this.Todos.find((todo) => todo.id === id);
  }

  readTodos() {
    return this.Todos;
  }

  updateTodo(id, content) {
    let idx = this.Todos.findIndex((todo) => todo.id === id);
    this.Todos[idx] = content;
  }

  deleteTodo(id) {
    this.Todos = this.Todos.filter((todo) => todo.id !== parseInt(id));
  }
}
