// while(조건) { }
// 조이 false가 될 때 건까지 코드를 무한 반복 실행.

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('작동중');
  if (i === 5) {
    break;
  }
  i++;
}
do {
  console.log('do-while 실행중');
} while (isActive);
