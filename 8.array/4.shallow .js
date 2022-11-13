// 얕은복사 => Javascript 에서 Object 는 메모리 주소가 전달됨.
// 따라서, 다른 곳에서 수정하게 될 경우 전부 다 변경됨.
// Array.from, conat, slice, spread

let apple = { name: 'APPLE', price: 1 };
let pineapple = { name: 'PINEAPPLE', price: 5 };
let strawberry = { name: 'STRAWBERRY', price: 3 };

let fruit = [apple];
// console.log(fruit); //

let fruits = Array.from(fruit);
console.log(fruits);
console.log('---------------------------------------');

fruits.push(pineapple, strawberry);
console.log(fruits);
console.log('---------------------------------------');

apple.price = 3;
console.log(fruit);
console.log(fruits);
