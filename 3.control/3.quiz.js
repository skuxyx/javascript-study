// 퀴즈

let num = 2;
// num 의 숫자가 짝수이면 Good, 홀수라면 Bad 를 출력하도록.

// if
if (num % 2 === 0) {
  console.log('Good');
} else {
  console.log('Bad');
}

// ternary
let exam = num % 2 === 0 ? 'Good' : 'Bad';

console.log(exam);
