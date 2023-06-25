let value;

const now = new Date();
console.log(now);

const date1 = new Date("9-19-1993 06:15:00");

const date2 = new Date("September 19 1993");

const date3 = new Date("9/19/1993");

value = date1;

value = date1.getMonth(); // 8

value = date1.getDate(); // 19

value = date1.getDay(); // 0 -> Pazar günü

value = date1.getHours(); // 6

value = date1.getMinutes(); // 15

// set'leme
date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1994);
date1.setHours(2);
date1.setMinutes(34);
value = date1;



console.log(value);
