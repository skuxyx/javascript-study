// null, undefined 인 경우 코드 수행.

let num = 0;
// || 연산자 = falshy => 0, -0, ''
// 0 이 falshy 이므로 -1 출력, let num; 일 경우 -1 출력.
console.log(num || '-1');

console.log(num ?? '-1'); // num이 undefined 가 아니므로 0이 출력 됨.
