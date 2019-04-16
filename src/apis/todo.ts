import { Todo } from "./../types/todo";

export const addTodoAPI = (todo: Todo, cb: any) => {
  const todos = JSON.parse(localStorage.getItem("todos") as string);
  let arr: Array<Todo> = [];
  if (todos.length === 0) {
    arr = [Object.assign({ id: 1 }, todo)];
    localStorage.setItem("todos", JSON.stringify(arr));
  } else {
    arr = todos.concat([
      Object.assign({ id: todos[todos.length - 1].id + 1 }, todo)
    ]);
    localStorage.setItem("todos", JSON.stringify(arr));
  }
  if (typeof cb === "function") {
    cb(arr);
  }
};

export const deleteTodoAPI = (id: number, cb: any) => {
  const todos = JSON.parse(localStorage.getItem("todos") as string);
  const arr = todos.filter(todo => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(arr));
  if (typeof cb === "function") {
    cb(arr);
  }
};

export const listTodos = (status: string, cb: any) => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  const todos = JSON.parse(localStorage.getItem("todos") as string);
  if (typeof cb === "function") {
    cb(filterTodos(status, todos));
  }
};

export const updateTodo = (todo: Todo, cb: any) => {
  let todos = JSON.parse(localStorage.getItem("todos") as string);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todo.id) {
      todos[i] = todo;
      break;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  cb(todos);
};

const filterTodos = (status: string, todos: Array<Todo>) => {
  let filteredTodos: Array<Todo> = [];
  switch (status) {
    case "active": {
      filteredTodos = todos.filter(todo => todo.isCompleted !== true);
      break;
    }
    case "completed": {
      filteredTodos = todos.filter(todo => todo.isCompleted === true);
      break;
    }
    default:
      filteredTodos = todos;
  }
  return filteredTodos;
};
