let value;

const value1 = 10;
const value2 = 4;

value = Math.PI;
value = Math.E;

value = Math.round(3.6); // 4
value = Math.round(3.5); // 4
value = Math.round(3.2); // 3

value = Math.ceil(3.2); // yukarı yuvarlar -> 4
value = Math.floor(3.9); // aşağı yuvarlar -> 3

value = Math.sqrt(256); // karekök

value = Math.abs(-10); // mutlak değer

value = Math.pow(4,3); // üs alma

value = Math.max(10,-1,100,32); // 100

value = Math.random(); // 0 ile 1 arasında değerler üretilir

value = Math.floor(Math.random()*100); // 0 ile 100 arasında tam sayı değerler üretir



console.log(value);
