// Scope Kavramı

let a = "text"; // Global Scope

function f() {
    // function scope
}

if(true) {
    // block scope
}


var value1 = 10;
let value2 = 20;
const value3 = 30;

console.log(value1,value2,value3);

function Func() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60; 

    console.log(value1,value2,value3);
}

Func();

// if(true) {
//     var x = 70;
//     let y = 80;
//     const z = 90;
// }

// console.log(x); // ! output : 70
// console.log(y); // ! output : y is not defined.
// console.log(z); // ! output : z is not defined.

if(true) {
    var value1 = 100; 
    // -> önceden var ile tanımlanmış olan value1 değerini aldı ve onu kullanıp değerini 100'e eşitledi
    let value2 = 110; // block scope'tan ötürü sadece bu block için tanımlandı. Blok dışında kullanılamaz!
    const value3 = 120; // block scope'tan ötürü sadece bu block için tanımlandı. Blok dışında kullanılamaz!
    console.log(value1,value2,value3); 
} //100 110 120

console.log(value1,value2,value3); //100 20 30

// değiştirilmemesini istediğimiz değerleri "var" ile tanımlamamalıyız
// "const" kullanmak gerekir
