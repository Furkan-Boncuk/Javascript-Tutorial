// Syntactic Sugar

// ES6 Öncesi - eski yöntem (Prototype)
function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function() {
    console.log("İsim : "+this.name+" Yaş : "+this.age+" Maaş : "+this.salary);
}

const employee = new Employee("Furkan",19,15275);

console.log(employee);

employee.showInfos();


// ES6 - yeni yöntem
class EmployeeClass {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos() {
        console.log("İsim : "+this.name+"\nYaş : "+this.age+"\nMaaş : "+this.salary);
    }

}

const employee2 = new EmployeeClass("Furkan",19,17850);

console.log(employee2);

employee2.showInfos();

