let value;

// String' e çevirme
value = String(123);
value = String(true);
value = String(3.14);
value = (10).toString();

console.log(value);
console.log(typeof value); // value -> String

// Number' a çevirme
value = Number("123");
value = Number(null);
value = Number("Hello World"); // console.log(typeof value); value -> NaN
value = Number(3.14);
value = parseFloat(3.14);
value = parseInt(32);

console.log(value);
console.log(typeof value); // value -> number

// String + number
const a = "Hello"+34;

console.log(a); // Hello34
console.log(typeof a); // value -> String

