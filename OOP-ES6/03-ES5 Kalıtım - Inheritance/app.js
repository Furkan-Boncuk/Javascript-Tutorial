// SuperClass, BaseClass = (Person)
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim : "+this.name+"\nYaş : "+this.age);
    }

}

// DerivedClass, SubClass, ChildClass = (Employee)
class Employee extends Person { // kalıtım almak için keyword -> extends

    constructor(name, age, salary) {
        super(name,age); // üst sınıfın constructor'ını kullanmak istediğimizi gösterir.
        this.salary = salary;

        //super.showInfos(); // üst sınıftaki fonksiyonu burada kullanmak için yazdık
    }

    // override işlemi
    showInfos() {
        console.log("Employee Details"+"\nİsim : "+this.name+"\nYaş : "+this.age+"\nMaaş : "+this.salary);
    }

    raiseSalary(amount) {
        this.salary += amount;
    }

}

const emp = new Employee("Furkan",19,15000);

emp.showInfos();

emp.raiseSalary(1575);

emp.showInfos();

