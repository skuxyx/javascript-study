// 산술 연산자 ( Arithmetic operators )
// + (더하기 ), - (빼기), * (곱하기) , / (나누기) , % (나머지 값) , ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // ES7

// + 더하기 연산자 주의점!
let text = '두개의' + '글자가';
console.log(text);

text = '1' + 1; // 문자열과 숫자를 더하면 문자열로 변환된다.
console.log(typeof text); // string
