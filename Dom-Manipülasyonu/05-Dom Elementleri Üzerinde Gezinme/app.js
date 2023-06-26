let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// childNodes -> text dahil tüm elementleri alır. (satır atlamaları bile dahil eder)

value = todoList.childNodes;
value = todoList.childNodes[0];

// children -> yalnızca elementleri alır

value = todoList.children;
value = todoList.children[todoList.children.length -1]; // son element

value = todoList.children[2].textContent = "-BURASI DEĞİŞTİRİLDİ-";


value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "-BURASI DA DEĞİŞTİRİLDİ-";


value = todoList;
value = todoList.firstElementChild.textContent; // Todo 1
value = todoList.lastElementChild; 

value = todoList.children.length // 4
value = todoList.childElementCount; // 4



value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement.parentElement;
// <div class="container"> => <body> => <html>


// Element kardeşleri :
value = todo; // Todo 2 elementi
value = todo.previousElementSibling; // Todo 1 elementi
value = todo.nextElementSibling; // Todo 3 elementi
value = todo.nextElementSibling.nextElementSibling; // Todo 4 elementi


console.log(value);
