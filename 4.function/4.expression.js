// 함수 선언문
// function example() {}

// 함수 표현식
// const example = function () {};

// 화살표 함수
// const example = () => {};

let add = (a, b) => {
  return a + b;
};

// 값만 return 하는 함수인 경우 15번 줄과 같이 '괄호', '리턴' 생략 가능.
// let add = (a, b) => a + b;
console.log(add(1, 5));

// 파라미터가 하나일 경우 괄호를 생략해서 작성할 수 있음.
let printNum = (num) => console.log(num);
printNum(1);
