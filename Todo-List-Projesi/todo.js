// Tüm elementlerimizi seçelim
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const ul = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearAllTodosButton = document.querySelector("#clear-todos"); 

addEventListenersForAllElements(); // -> fonksiyonumuzu çalıştıralım.

function addEventListenersForAllElements() { // Bütün eventListener' ları atayan fonksiyon

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI); // sayfa yüklendiğinde tüm todoları arayüze ekleyecek metodu sağladık
    secondCardBody.addEventListener("click",deleteTodo);
    filterInput.addEventListener("keyup",filterTodos);
    clearAllTodosButton.addEventListener("click",clearAllTodos);

}

function addTodo(event) {

    const newTodo = todoInput.value.trim(); // girilen ifadedeki boşluk karakterlerini trim() metoduyla kestik

    console.log(newTodo); // kontrol etmek için

    if(newTodo === "") {
        showAlert("danger","Lütfen bir Todo girin...");
    } else if(isTextEqualsAnotherTodosText(newTodo)) {
        showAlert("danger","Bir Todo diğer bir Todo ile aynı olamaz...");
    } else {
        addTodoToUI(newTodo); // aldığı String değeri list item olarak arayüze ekleyecek fonksiyon
        addTodoToStorage(newTodo);
        showAlert("success",`Todo başarıyla eklendi : ${newTodo}`);
    }
    
    event.preventDefault();
}

function showAlert(type,message) {
    /*
        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>
    */

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeout 
    window.setTimeout(function(){
        alert.remove();
    },1500); // 1500 ms = 1.5 s sonra çalıştıracak olduğumuz fonksiyonu gireceğiz

}

function addTodoToUI(newTodo) { 
    
    /*<li class="list-group-item d-flex justify-content-between">
                    Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li>*/

    // listItem oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    // newTodo, String değerini listItem içerisine yerleştirmek
    listItem.appendChild(document.createTextNode(newTodo));

    // link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // link' i listItem içerisine yerleştirmek
    listItem.appendChild(link);

    // ul içerisine listItem' ı yerleştirmek
    ul.appendChild(listItem);

    // işlem bittikten sonra todoInput alanındaki yazıyı silmek
    todoInput.value = "";

}

function addTodoToStorage(newTodo) {

    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
    
}

function getTodosFromStorage() { // Storage'dan todos listesini alan ve döndüren metod

    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}

function loadAllTodosToUI() {

    let todos = getTodosFromStorage();

    todos.forEach(function(todo){

        addTodoToUI(todo);

    });
}

function deleteTodo(event) {

    if(event.target.className === "fa fa-remove") {

        event.target.parentElement.parentElement.remove();
        // fa fa-remove => <a></a> => <li></li>

        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent);

        showAlert("warning",`Todo başarıyla silindi : ${event.target.parentElement.parentElement.textContent}`);
    }
}

function deleteTodoFromStorage(deletetodo) {
    
    let todos = getTodosFromStorage();

    todos.forEach(function(todo, index) {
        if(todo === deletetodo) {
            todos.splice(index,1); // belirtilen index'ten sonra 1 elemanı storage'dan silecek
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));

}

function filterTodos(event) {

    const filterValue = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    
    listItems.forEach(function(item) {

        const text = item.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1) {
            // bulunmuyorsa 
            item.setAttribute("style","display : none !important"); // görünmemesini sağlarız.
            // !important koymamızdaki sebep : d-flex class'ından ötürü gelen "display : block" özelliğini baskılamak
        } else {
            item.setAttribute("style","display : block"); // göster
        }

    });

}

function clearAllTodos(event) {

    if(confirm("Tüm Todo'ları silmek istediğinize emin misiniz ?")) {
        // ilk elementi null değer alana kadar yani ilk elementi de silinene kadar döngü ile ilk elementlerini silelim
        while(ul.firstChild != null) {
            ul.removeChild(ul.firstChild);
        }

        localStorage.removeItem("todos");
        
    }
    
}


function isTextEqualsAnotherTodosText(newTodo) { // Todo' nun text'ini diğer todolar ile karşılaştırıp true false değer dönen metod

    let resultparameter = false;

    const list = document.querySelectorAll(".list-group-item");
    console.log(list); // kontrol etmek için

    if(list.length !== 0) {

        list.forEach(function(item) {
        
          console.log(item.textContent.toLowerCase());
    
            if(item.textContent.toLowerCase() === newTodo.toLowerCase()) {
                resultparameter = true;
            }
    
        }); 
    }

    return resultparameter;

}

