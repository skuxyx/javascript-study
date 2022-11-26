// Scope => 식별자(변수, 함수, 클래스)가 유효함 범위를 의미하며,
// 선언된 위치에 따라 접근 여부에 대한 유효 범위가 결정됨.

// => 블럭이 사용되는 { }, function() {}, if() {}, for() {} ,,,

// 블럭 내부 변수는 블럭이 끝나는 순간 메모리에서 제거됨.

// --------------------------------------------------------

// 블럭 안에서 선언된 변수는 블럭 내부에서만 유효 => 외부에서 사용 불가.
{
  const sky = 'sky';
  // console.log(sky); => sky
}
const bluesky = 'bluesky';
// console.log(sky); => sky is not defined

// --------------------------------------------------------

// 함수 외부에서 내부 변수를 참조할 수 없음.
function animal() {
  const a = 'a'; // 지역변수.
  console.log(a);
}
// console.log(a); => a is not defined

// --------------------------------------------------------

// 함수 외부에서 함수 매개변수 참조할 수 없음.
function hello(message) {
  console.log(message);
}
// console.log(message); => message is not defined

// --------------------------------------------------------
