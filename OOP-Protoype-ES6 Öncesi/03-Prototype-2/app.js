function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function() {
    console.log("İsim : " + this.name + "\nYaş : " + this.age);
}
// prototype üzerine bu fonksiyonumuzu verdik
// her objenin prototype'inde bulunduğu için her objede kullanılabilir
// metotlarımızı bir constructor içerisinde kaydetmektense prototype içinde kaydedersek bellekte sadece 1 yer tutulmasını sağlarız, daha avantajlıdır

const emp1 = new Employee("Furkan",19);
const emp2 = new Employee("emp2",27);

console.log(emp1);

emp1.showInfos();
emp2.showInfos();
