// // Local Storage

// // setItem

localStorage.setItem("key1","value1");
localStorage.setItem("key2","value2");

// // getItem

const value = localStorage.getItem("key1");
console.log(value);
console.log(typeof value);

// clear localStorage

localStorage.clear();

if(localStorage.getItem("key2") === null) {
    console.log("Sorguladığınız veri bulunamadı");
}
else {
    console.log("key2 = " + localStorage.getItem("key2") + " bulundu");
}

// localStorage' a array şeklinde veri atma

const todos = ["Todo1","Todo2","Todo3"];

localStorage.setItem("todos", JSON.stringify(todos));

// verileri array' in elemanları olarak alma 

const value2 = JSON.parse(localStorage.getItem("todos"));
console.log(value2);


// Todo Uygulamamızda form'dan veri alıp localStorage' a kaydedelim : 
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(event) {

    const value = todoInput.value; // "Todo 7"

    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));

    event.preventDefault(); // submit durumunda kendi sayfamıza gitmeyi engellemek için 
}
