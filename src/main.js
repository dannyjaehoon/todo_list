import { TodoService } from "./service/TodoService.js";
import { renderTodoView } from "./view/TodoRender.js";

const todoService = new TodoService(); // 인스턴스

function clickedTodo(id) {
  const clickedTodoEl = document.getElementById(id);

  if (!clickedTodoEl) return;

  if (!clickedTodoEl.classList.contains("clicked")) {
    clickedTodoEl.classList.add("clicked");
  } else {
    clickedTodoEl.classList.remove("clicked");
  }
}

function eventListeners(todoService) {
  const createButton = document.getElementById("CreateTodo");
  const deleteTodo = document.getElementById("DeleteTodo");
  const updateTodo = document.getElementById("UpdateTodo");

  createButton.addEventListener("click", () => {
    const content = document.getElementById("TodoInput").value;
    if (!content) {
      alert("input any content");
      return;
    }
    todoService.createTodo(content);
    renderTodo();
  });

  deleteTodo.addEventListener("click", () => {
    const checkedTodos = document.querySelectorAll(
      "input[name='todoitem']:checked"
    );

    checkedTodos.forEach((el) => {
      todoService.deleteTodo(el.parentNode.id);
    });
    renderTodo();
  });
}

function addOnChangeListenerForTodoItem() {
  const todos = document.querySelectorAll("input[name='todoitem']");

  console.log(todos); // 배열.. 안에 input요소에 대한 정보

  todos.forEach((el) =>
    el.addEventListener("change", (el) => {
      clickedTodo(el.target.parentNode.id);
    })
  );
}

function renderTodo() {
  clickedTodo(); // 여기서는 아무것도 안함

  // app이라는 id를 가지고 있는 요소에 rendertodoview에서 반환한 값을 append(아래로 붙인다)
  app.innerHTML = renderTodoView(todoService); // renderTodoview app -> 문자열
  eventListeners(todoService); // html에 이벤트효과를 주는거
  addOnChangeListenerForTodoItem(); // todoitem이라는 name 속성을 가지고있는 input들에게 change 이벤트를 걸어줌
}
function init() {
  renderTodo(); // html 동적 생성
}

init();
