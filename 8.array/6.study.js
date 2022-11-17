// 고차함수란 ?
// => 1) 함수를 인자로 전달받거나, 2) 함수를 결과로 반환하는 함수.

// 일급객체란 ?
// => 1) 변수에 할당이 가능하다. 2) 다른 함수를 인자로 전달 받는다. 3) 함수의 결과로 리턴이 가능하다.

// 메서드란 ?
// => 객체에 들어있는 함수.

// 많이 사용하는 내장 고차함수 정리.

// filter => 배열의 각 요소가 특정 함수에 따라, 'true'일 때 따로 분류.

let num1 = [1, 2, 3, 4, 5, 6];

let numFilter = num1.filter((number) => {
  return number % 2 === 0;
});
console.log(numFilter); // [2, 4, 6 ]

// map => 모든 요소에 동일한 행동을 준 값을 반환, 배열의 각 요소가 특정 함수에 의해 다른 요소로 지정됨.

let num2 = [1, 2, 3, 4, 5];

let result = num2.map((number2) => {
  return number2 * 2;
});
console.log(result); // [ 2, 4, 6, 8, 10 ]

// reduce => 배열을 하나의 값으로 만들어 줌.
//        => 배열의 요소를 특정 함수에 따라, '하나'의 형태로.
//        => 초기값을 지정해 줄 수 있음. 지정 안하면 배열 첫번째 요소가 들어감.
//           => 초기값을 넣어주면 오류를 방지할 수 있는 역할을 함.

let num3 = [1, 2, 3];

let numReduce = num3.reduce((a, b) => {
  return a + b;
}, 1); // 초기값 1
console.log(numReduce);
