// for(변수선언문; 조건식; 증감식) { }
// 실행순서는 변수선언 => 조건식 값이 참이면 { } 수행
// => 증감식 수행 => 조건식이 거짓이 될 때 까지 2->3 과정 계속.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.clear();
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
