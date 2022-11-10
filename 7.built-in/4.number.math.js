const number = 123;
const number1 = new Number(123);

console.log(number); // typeof number
console.log(number1); // typeof object

// 반올림하고 문자열로 반환
const number2 = 1111.11;
console.log(number2.toFixed());

// 숫자를 문자열로 변환
console.log(number2.toString()); // typeof string

// ---------------------------------------------------

// PI
console.log(Math.PI); // 3.141592,,,,

// 정수
console.log(Math.trunc(3.141592)); // 3

// 절대값으로
console.log(Math.abs(-1)); // 1

// 소수점 반올림
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.6)); // 2

// 소수점 이하 올림
console.log(Math.ceil(1.2)); // 2

// 소수점 이하 내림
console.log(Math.floor(1.9)); // 1

// 최소값
console.log(Math.min(100, 105, 104)); // 100

// 최대값
console.log(Math.max(100, 105, 104)); // 105
