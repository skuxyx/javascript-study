// 함수의 parameter 로 들어가는 함수로, 함수 내부에서 실행되는 함수를 의미한다.
// 당장 사용되는 것이 아닌,
function animal(mood, callback, callback2) {
  if (mood === 'happy') {
    callback();
  } else if (mood === 'unhappy') {
    callback2();
  }
}

function play() {
  //  console.log('산책 나가고 싶다');
}

function sleep() {
  //   console.log('자고싶다');
}

// play 함수가 값으로 animal의 매개변수 callback 으로 들어감.
// unhappy 일 경우, sleep 함수가 값으로 animal의 매개변수 callback2 로 들어감.
animal('happy', play, sleep);

// ----------------------------------------------------------------------------------------------------

let newArray = ['Helloworld', 'abcd', 'Coding', 'abc', 'bichon'];

function callback(el) {
  // if (el.length > 5) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 코드를 줄이면
  return el.length > 5;
}
let newArr = newArray.filter(callback);
console.log(newArr); // [ 'Helloworld', 'Coding', 'bichon' ]

// ----------------------------------------------------------------------------------------------------

newArray = ['Helloworld', 'abcd', 'Coding', 'abc', 'bichon'];

// newArr = newArray.filter(function (el) {
//  return el.length > 5;
// });

// 화살표 함수를 이용하면,
// 매개변수가 하나인 경우 괄호 없어도 O
// 코드가 한 줄인 경우 중괄호, return 없어도 O

newArr = newArray.filter((el) => el.length > 5);
console.log(newArr); // [ 'Helloworld', 'Coding', 'bichon' ]

// ----------------------------------------------------------------------------------------------------

// operator 이 필요한 순간에 호출.
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

function calc(a, b, operator) {
  result = operator(a, b);
  return result;
}

calc(1, 9, add);
// console.log(result);
