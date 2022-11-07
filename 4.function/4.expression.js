// 함수 선언문
// function example() {}

// 함수 표현식
// const example = function () {};

// 화살표 함수
// const example = () => {};

// 값만 return 하는 함수일 경우 괄호, 리턴 생략 가능.
// => let add = (a,b) => a+b;
let add = (a, b) => {
  return a + b;
};
console.log(add(1, 5));
