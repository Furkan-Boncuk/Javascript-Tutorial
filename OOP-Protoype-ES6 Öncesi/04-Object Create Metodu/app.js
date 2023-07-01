const obj = {
    test1 : function() {
        console.log("TEST 1");
    },
    test2 : function() {
        console.log("TEST 2");
    }
}

console.log(obj);

const obj2 = Object.create(obj); // obj2 oluşturuluyor ve prototype özelliği obj'yi gösteriyor. Object.create() kalıtım işlemlerinde kullanılıyor.

console.log(obj2);

obj2.test1();



function Person() { // Person constructor

}

Person.prototype.test1 = function() {
    console.log("TEST 1 -> Person");
}

Person.prototype.test2 = function() {
    console.log("TEST 2 -> Person");
}

function Employee(name, age) { // Employee constructor
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
// Person'ı prototype alır ve Person üzerindeki metodlar kullanılabilir.

const emp = new Employee("Furkan",19);

console.log(emp);

emp.test1();
emp.test2();

Employee.prototype.myTest = function() {
    console.log("myTest method");
}

console.log(emp);

emp.myTest();
