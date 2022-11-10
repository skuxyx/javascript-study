console.log(parseInt('100.01')); // 정수로 변환
console.log(parseFloat('15.555')); // 숫자로 변환

// URI => 아스키 문자로만 이루어 져야함.
// 한글, 특수문자는 이스케이프 처리.
const URL = ''; // ex) 한글/특수문자 입력하면
const encoded = encodeURI(URL); // 이스케이프로 변환.
console.log(encoded);

const decoded = decodeURI(encoded); // 이스케이프로 변환된 것을 다시 한글/특수문자로 나타냄
console.log(decoded);
