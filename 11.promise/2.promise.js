// Promise 를 사용하면 callback 사용하지 않음.

function animal(play) {
  return new Promise((resolve, reject) => {
    // animal 함수를 호출하면 Promise 실행.
    if (!play || play < 0) {
      reject(new Error('산책 시간이 0 이하입니다.'));
    }
    setTimeout(resolve, play * 1000);
  });
}

animal(-1)
  // .then // 콜백이 호출되면 필요한 일 수행.
  // .catch // 에러 처리.
  // .finally // 프로미스의 이행과 거부 여부에 상관없이, 끝나면 항상 호출됨.

  .then(() => {
    console.log('산책 끝');
  })
  // .catch
  .finally(() => {
    console.log('종료.');
  });
