// constructor - yapıcı fonksiyon

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;

    console.log(this); // üretilen objeleri ekrana yazdırır

    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }

}

const emp1 = new Employee("emp1",23,14500); // obje oluşturma
const emp2 = new Employee("emp2",27,19250);

emp1.showInfos();
emp2.showInfos();


