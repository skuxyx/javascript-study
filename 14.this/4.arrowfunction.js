// 화살표 함수.
// 1. 일반 함수에 비해서 문법이 깔끔하다.
// 2. 생성자 함수로 사용할 수 없다 => 무거운 prototype 생성하지 않음.
// 3. 함수 자체 arguments 객체 가지고 있지 않음.
// 4. this 바인딩이 정적으로 결정.
// => 함수에서 가장 근접한 상위 스코프 this에 정적으로 바인딩.

function add(a, b) {
  console.log(arguments);
}
add(1, 2); // [Arguments] { '0': 1, '1': 2 }

let add2 = (a, b) => {
  console.log(arguments);
};
add2(1, 2);
