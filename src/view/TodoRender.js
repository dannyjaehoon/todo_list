const renderInput = () => {
  return `
    <input id="TodoInput" type="text"/>
    `;
};

const renderTodo = (todo) => {
  return `
        <li id=${todo.id}>
            <input type="checkbox" name="todoitem"
            ${todo.completed ? "checked" : ""}
            />
            ${todo.content}
        </li>
    `;
};

const renderTodos = (todos) => {
  return `
        <ul>
            ${todos.map((todo) => renderTodo(todo)).join("")} 
        </ul>
    `;
};

const renderButtons = () => {
  return `
          <button id="CreateTodo">Create Todo</button>
          <button id="DeleteTodo">Delete Todo</button>
      `;
};

export const renderTodoView = (TodoService) => {
  return `
        ${renderInput()}
        ${renderTodos(TodoService.Todos)}
        ${renderButtons()}
    `;
};
