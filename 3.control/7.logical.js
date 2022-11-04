// 논리연산자 ( Logical Operator )
// && 그리고 , || 또는 , ! 부정 ( 단항연산자에서 온 것 ) , !! 불리언값으로 변환 ( 단항연산자 응용버전 )

let num = 1;
if (num >= 0 || num > 20) {
  console.log('Good');
}

if (num != 8) {
  console.log('8이 아닙니다.');
}

console.log(!!'text');
