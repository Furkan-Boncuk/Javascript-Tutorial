// Session Storage - Key ve Value

// Butonları seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputları seçmek

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(event) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(event) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(event) {
    sessionStorage.clear();
}
