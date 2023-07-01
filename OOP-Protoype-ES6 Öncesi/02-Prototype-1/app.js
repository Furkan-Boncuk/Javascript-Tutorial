function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function() {
        console.log("Bilgiler Gösteriliyor...");
    }
}

const emp1 = new Employee("emp1",27);

console.log(emp1);

console.log(emp1.toString()); // Object sınıfındaki toString() metodu
// prototype objeler arasında kalıtım yapmamızı sağlar.
// her bir obje Object'ten metodlarını miras alır.
