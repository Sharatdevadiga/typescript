"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoInput");
const form = document.querySelector("form");
const todoList = document.querySelector("#todoList");
let todos = readTodos();
console.log(todos);
todos === null || todos === void 0 ? void 0 : todos.forEach(createTodo);
function readTodos() {
    const todoSJSON = localStorage.getItem("todos");
    if (todoSJSON === null)
        return [];
    return JSON.parse(todoSJSON);
}
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleFormSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo); // Add to the array
    saveToDos();
    input.value = "";
}
function createTodo(todo) {
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
    todoList === null || todoList === void 0 ? void 0 : todoList.append(newLi);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
// // TYPE ASSERTION -> AS
// btn?.addEventListener("click", () => {
//   console.log(input.value);
//   input.value = "";
//   // console.log(<HTMLInputElement>input.value) -> if not using the type assertion
// });
// TYPE ASSERTION -> as
const mystery = "Hello world!!";
const numChars = mystery.length;
