// let 은 재할당이 가능.
let a = 1;
a = 2;

// const 는 재할당이 불가능.
// 1. 상수.
// 2. 상수변수 또는 변수.

const text = 'Hello World!';
// text = 'hi'; 출력하면 오류 발생.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수.
const apple = {
  name: 'apple',
  color: 'red',
  display: 'appleDesign',
};
// apple = {};
console.log(apple);

apple.name = 'orange';
console.log(apple);
