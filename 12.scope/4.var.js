// var => 현재는 사용되지 않음 => let, const 사용.

// 1. keyword(let, const)없이 변수를 할당하게 되면 var이 기본적으로 사용됨.
// => let 함수를 사용해서 변수를 재할당 하는 것인지, 변수를 선언한 것인지 구분이 어려움.
num = '1';
console.log(num);

// 2. var의 경우 선언하고 동일한 이름으로 중복 선언 가능.
// let, const 의 경우 동일한 이름으로 재선언 불가.
var num1 = 1;
var num1 = 1; // 에러 안뜸.
console.log(num1);

// const num2 = 1;
// const num2 = 2; => 동일한 이름으로 재선언 불가 => 에러.

// 3. 블록 레벨 스코프를 무시함.

var fruit = 'apple';
{
  var fruit = 'apple2';
  {
    var fruit = 'apple3';
  }
}
console.log(fruit); // apple3 가 출력 됨.

// let, const의 경우 블록 레벨 스코프로 인해 전역 변수(글로벌 변수)인 'apple'이 출력 됨.

// let fruit1 = 'apple';
// {
//   let fruit1 = 'apple2';
//   {
//     let fruit1 = 'apple3';
//   }
// }
// console.log(fruit1);

// 4. 함수 레벨 스코프는 지원함.
// => 함수 내부에서 사용하는 변수를 스코프 밖에서 사용하면 에러 발생.

function hello() {
  const message = 'Hello world';
}
// console.log(message);
