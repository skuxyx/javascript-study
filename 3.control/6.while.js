// while(조건) { }
// 조건이 false가 될 때 까지 코드를 무한 반복 실행.

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직 살아있다');
  if (i === 5) {
    break;
  }
  i++;
}

do {
  console.log('do-while 아직 실행중');
} while (isActive);
