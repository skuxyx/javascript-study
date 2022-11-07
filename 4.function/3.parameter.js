// 1. 매개변수 기본값은 undefined.
// 2. 매개변수 정보는 arguments 객체에 저장.
// 3. 매개변수에 기본값을 주고자 할 때 a = 1, b = 2 와 같이 사용.

function add(a, b) {
  return a + b; // return을 명시하지 않으면 undefined 반환.
}
console.log(add(1, 2));

// Rest 매개변수.
function sum(a, b, ...numbers) {
  // a = 1, b = 2 나머지 3,4,5,,8 은 배열로
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
