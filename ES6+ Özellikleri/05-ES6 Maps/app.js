// Map -> Key - Value

let myMap = new Map();

const key1 = "Furkan"; // String
const key2 = {a:10,b:20}; // object
const key3 = () => 2; // function

// set
myMap.set(key1,"String değer");
myMap.set(key2,"Object değer");
myMap.set(key3,"Function değer");

// get
console.log(myMap.get(key1));
console.log(myMap);

//size
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",5000000);
cities.set("İstanbul",1500000);
cities.set("İzmir",4000000);

// forEach ile map'i gezelim : 
cities.forEach(function(value,key) {
    console.log(key,value);
});
/*
Ankara 5000000
İstanbul 1500000
İzmir 4000000
*/

// for of ile map'i gezelim : 
for(let value of cities) {
    console.log(value);
}
/*
['Ankara', 5000000]
['İstanbul', 1500000]
['İzmir', 4000000]
*/

for(let [key,value] of cities) {
    console.log(key,value);
}
/*
Ankara 5000000
İstanbul 1500000
İzmir 4000000
*/

// Map Keys
for(let key of cities.keys()) {
    console.log(key);
}
/*
Ankara
İstanbul
İzmir
*/

for(let value of cities.values()) {
    console.log(value);
}
/*
5000000
1500000
4000000
*/

const array = [["key1","value1"],["key2","value2"]];

const anotherMap = new Map(array);

console.log(anotherMap);
// output : {'key1' => 'value1', 'key2' => 'value2'}

const citiesArray = Array.from(cities);

console.log(citiesArray[0]); // ['Ankara', 5000000]
console.log(citiesArray[1]); // ['İstanbul', 1500000]
console.log(citiesArray); 
/*
[Array(2), Array(2), Array(2)]

0: ['Ankara', 5000000]
1: ['İstanbul', 1500000]
2: ['İzmir', 4000000]
*/
