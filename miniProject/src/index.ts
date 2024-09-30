// NON NULL ASSERTION OPERATOR -> !
// it tells the ts that the value wont be null
interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector("form");
const todoList = document.querySelector("#todoList") as HTMLUListElement;

let todos: Todo[] = readTodos();
console.log(todos);
todos?.forEach(createTodo);

function readTodos(): Todo[] {
  const todoSJSON = localStorage.getItem("todos");
  if (todoSJSON === null) return [];
  return JSON.parse(todoSJSON);
}

function saveToDos(): void {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleFormSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  createTodo(newTodo);
  todos.push(newTodo); // Add to the array

  saveToDos();

  input.value = "";
}

function createTodo(todo: Todo) {
  // create new li and push it to the ul
  const newLi = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;

  checkBox.addEventListener("change", () => {
    todo.completed = !todo.completed;
    saveToDos();
  });

  newLi.append(checkBox);
  newLi.append(todo.text);
  todoList?.append(newLi);
}

form?.addEventListener("submit", handleFormSubmit);

// // TYPE ASSERTION -> AS
// btn?.addEventListener("click", () => {
//   console.log(input.value);
//   input.value = "";

//   // console.log(<HTMLInputElement>input.value) -> if not using the type assertion
// });

// TYPE ASSERTION -> as
const mystery: unknown = "Hello world!!";
const numChars = (mystery as string).length;
