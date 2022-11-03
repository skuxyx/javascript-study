// 동등 비교 관계 연산자 ( Equality Operators )
// == 값이 같음, != 값이 다름,
// === 값과 타입이 둘다 같아야 한다, !== 값과 타입이 다름.

console.log(2 == 2); // true
console.log(2 != 2); // false

console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == '2'); // true ( 타입은 다르지만, 문자열 안에 있는 숫자 '2'를 2로 자동으로 변환 )
console.log(2 === '2'); // false ( 값은 동일하지만, 왼쪽은 문자열 오른쪽은 숫자열 이므로 false )

console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true
// obj1과 obj2에는 각기 다른 메모리 주소가 할당되어 있으므로 false
// key:value (name: 'js')의 값이 동일하지만 서로 다른 개별적인 object로 할당.

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);

console.log(1 + '1');

let sum = 1;
sum = sum + 1;
sum = sum + 3;
sum = sum + 4;

let a = function () {};
console.log(typeof a);
