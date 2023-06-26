const todoInput = document.getElementById("todo");

let element;

element = todoInput.classList;

// 1.yöntem :
//todoInput.className = "form-control newClass";

// 2.yöntem :
todoInput.classList.add("newClass");
todoInput.classList.remove("form-control");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
// olan bir attribute' ı değiştirmek istersek : 
todoInput.setAttribute("placeholder","Yeni Placeholder");
// olmayan bir attribute vermek istersek : 
todoInput.setAttribute("title","Input");


element = todoInput;
element = todoInput.hasAttribute("required"); // false -> böyle bir attribute yok
element = todoInput.hasAttribute("title"); // true -> title attribute' ı var
todoInput.removeAttribute("name");


element = todoInput;
console.log(element);
