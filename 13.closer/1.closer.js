// closer => 내부함수는 외부함수에 접근이 가능.
// => 외부 함수 실행이 종료되어 함수가 소멸되더라도, 내부함수가 외부함수 변수에 접근이 가능.

function outer() {
  const a = 'Hello';
  function inner() {
    console.log(a);
  }
  return inner;
}
let abc = outer();
abc();
