// element silme

const todoList = document.querySelector("ul.list-group");

const todos = document.querySelectorAll("li.list-group-item");

// remove() metodu
todos[3].remove(); // Todo 4 silindi

// removeChild() metodu
todoList.removeChild(todoList.lastElementChild); // Todo 3 silindi

todoList.removeChild(todos[1]); // Todo 2 silindi

console.log(todos);
console.log(todoList);
