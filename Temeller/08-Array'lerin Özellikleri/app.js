let value;

const numbers = [43,56,33,23,44,35,5]

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,undefined,null,3.14];

value = numbers.length;

value = numbers[0];
value = numbers[numbers.length-1];

numbers[2] = "Bu indeks değiştirildi."
value = numbers;
// [43, 56, 'Bu indeks değiştirildi.', 23, 44, 35, 5]

value = numbers.indexOf(44); // 4

numbers.push(2); // Array'in sonuna 2 değerini ekler
value = numbers;

numbers.unshift(300); // Array'in başına 300 değerini ekler

numbers.pop(); // sondaki değeri siler

numbers.shift(); //başındaki değeri siler

numbers.splice(0,3); // 0 ile 3 arasındaki değerleri atar

numbers.reverse(); // Array'i ters çevirir

value = numbers.sort(function(x,y){
    return x - y;
});   // küçükten büyüğe sıralar

value = numbers.sort(function(x,y){
    return y - x;
});   // büyükten küçüğe sıralar


console.log(value);
