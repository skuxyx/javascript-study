// typeof : 데이터 타입을 확인할 때 사용.
// 값을 타입 문자열로 반환.

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 1; // 할당된 값에 따라 타입이 지정.
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
