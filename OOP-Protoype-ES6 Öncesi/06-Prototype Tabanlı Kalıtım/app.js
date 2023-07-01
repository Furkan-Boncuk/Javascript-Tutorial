// kalıtım (inheritance)

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("İsim : "+ this.name + "\nYaş : " + this.age);
}

const person = new Person("Furkan",19);

console.log(person);

function Employee(name, age, salary) {

    Person.call(this,name,age); // this ile Employee'den oluşan nesneyi gösteriyoruz. name,age ise Person'dan gelen argümanlar
    // kalıtımı bu şekilde call() metoduyla yapabiliriz
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const employee = new Employee("Furkan",19,15675);

console.log(employee);

employee.showInfos(); // Person üzerindeki metodu kullanabildik.

console.log(employee.toString()); // employee'nin Object prototype'indeki toString() kullanıldı

Employee.prototype.toString = function() {
    console.log("Employee Details" + "\nİsim : " + this.name + "\nYaş : " + this.age + "\nMaaş : " + this.salary);
}

employee.toString(); // employee'nin Employee prototype'indeki (kendi prototype' i) toString() kullanıldı

// Override - iptal etme 
Employee.prototype.showInfos = function() {
    console.log("İsim : "+ this.name + "\nYaş : " + this.age + "\nMaaş : " + this.salary);
} // Person üzerindeki showInfos() metodu yerine Employee prototype'i üzerindeki showInfos() kullanılır

employee.showInfos();

console.log(employee);
