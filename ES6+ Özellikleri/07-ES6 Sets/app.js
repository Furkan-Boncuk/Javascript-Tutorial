// Set => Küme (Array'den farklı olarak bir değeri yalnızca bir defa depolayabiliriz)

const mySet = new Set();

mySet.add(100);
mySet.add(100); // aynı değerden tekrar girdiğimizde hata almayız ancak değer kaydedilmez
mySet.add(3.14);
mySet.add("Furkan");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({name:"Furkan",age:19});

const mySet2 = new Set([100,3.14,"Furkan"]);

console.log(mySet);
console.log(mySet2);

// size
console.log(mySet.size);

// delete
mySet.delete("Furkan"); // değeri yazarak sileriz
console.log(mySet);

// has
console.log(mySet.has("Furkan")); // false

console.log(mySet.has([1,2,3]));  // referans tip olduğu için false değer alırız

// forEach ile gezelim : 
mySet.forEach(function(value) {
    console.log(value);
});

// for of ile gezelim :
for(let value of mySet) {
    console.log(value);
}

// set'lerden array oluşturmak
const array = Array.from(mySet);

console.log(array);
