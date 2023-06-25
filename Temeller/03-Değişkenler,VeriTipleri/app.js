var a = 20;
var b = 10;
var c = 40;

console.log(a,b,c);

// Primitive Veri tipleri

var a = 10; // a -> number
var b = 3.14; // b -> number
var c = "isim"; // c -> String
var d = true; // d -> boolean

console.log(typeof d);

var a = null;

console.log(typeof a); // a -> object

var a;

console.log(a); // a -> undefined


// Reference Veri tipleri
    //  Bellekte bir yeri gösteren veri tipleri

var numbers = [1,2,3,4,5];

console.log(numbers);

console.log(typeof numbers); // numbers -> object

var person = {
    name : "Furkan Boncuk",
    age : 19
}

console.log(person);

console.log(typeof person); // person -> object

var date = new Date();

console.log(date);

console.log(typeof date);

var merhaba = function(){
    console.log("Merhaba");
}

console.log(merhaba);

console.log(typeof merhaba);

// let keyword'ü

let name = "Furkan Boncuk";

// let name = "Furkan";         -> yapılamaz

let a,b;

a=10;
b=20;
console.log(a+b);

// const keyword'ü

const surname = "Furkan Boncuk";

console.log(surname);

// !!
name = "Furkan";

console.log(name);

// const a;       -> a'nın değeri hemen burada tanımlanmalıdır.

// a=10;

// console.log(a);     

const a = [1,2,3,4,5];

console.log(a);

a.push(6);

console.log(a);
