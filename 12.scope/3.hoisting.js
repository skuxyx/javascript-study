// Hoisting.
// 변수, 함수, 클래스

// -----------------------------------------------------------------

// 변수(let, const)와 클래스는 선언만 Hoisting => 초기화는 X.
// 초기화 전에 접근할 경우 에러 출력.

// console.log(num); => Cannot access 'num' before initialization
const num = 1;

// bichon = new Animal(); => Cannot access 'Animal' before initialization
class Animal {}
// ------------------------------------------------------------------

// 함수에서 Hoisting => 함수 선언문 전에 호출이 가능.
hello(); // 정상적으로 Hello world 가 출력 됨.

function hello() {
  console.log('Hello world');
}
// -----------------------------------------------------------------

let number = 1;
{
  console.log(number); // Cannot access 'number' before initialization
  // let number = 2;
}
