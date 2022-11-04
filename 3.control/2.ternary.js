// 삼항 조건 연산자 ( Ternary Operator )
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'apple';
if (fruit === 'apple') {
  console.log('apple!');
} else if (fruit === 'orange') {
  console.log('orange');
} else {
  console.log('fruit no');
}

fruit === 'apple' ? console.log('apple!') : console.log('orange');

let emoji = fruit == 'orange' ? 'appleOK' : 'noapple';
console.log(emoji);
