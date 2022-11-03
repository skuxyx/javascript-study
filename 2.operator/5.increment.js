// 증가 & 감소 연산자 ( Increment & Decrement Operators )

let a = 0;
console.log(a);

a++; // a = a + 1;
console.log(a);

a--; // a = a - 1;
console.log(a);

console.clear();
// 주의사항.
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킨다.
// ++a 값을 먼저 증가하고, 필요한 연산을 함

a = 0;
console.log(a++); // a가 0이므로 0을 console로 넘긴 후 그 뒤 값을 증가시킴
console.log(a); // 그러므로 1이 출력.

let b = ++a;
console.log(b);
