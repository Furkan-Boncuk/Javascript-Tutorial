// call, apply, bind

const obj1 = {
    number1 : 10,
    number2 : 20
}

const obj2 = {
    number1 : 30,
    number2 : 50
}

function addNumbers(number3,number4) {
    console.log(this); // Window Object
    console.log(this.number1); // undefined
    console.log(number3 + number4 + this.number1 + this.number2); 
}

addNumbers(100,200); // NaN

addNumbers.call(obj1,100,200); // call metoduyla ilk önce objeyi belirtir sonrasında metod argümanlarını veririz
// output : 330
addNumbers.call(obj2,100,200);
// output : 380
addNumbers.apply(obj1,[100,200]); // apply metodunun call metodundan farklı yönü, metod argümanlarını liste şeklinde veririz
// output : 330


// Bind
function getNumbersTotal(number3,number4) {
    return number3 + number4 + this.number1 + this.number2;
}

const copyFunc = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

// bind() metodu, this anahtar kelimesinin karıştırıldığı yerlerde kullanışlıdır.
// apply ve call metodlarından farklı olarak bir fonksiyonun kopyasını alıp onu istediğimiz bağlamda kullanabilmemizi sağlar

console.log(copyFunc(100,200));
// output : 330
console.log(copyFunc2(100,200));
// output : 380

