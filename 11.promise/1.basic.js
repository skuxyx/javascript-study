// Javascript 는 하나의 싱글 컨텍스트 스택을 가지고 있음 => 싱글 스레드.
// Javascript 는 동기적으로 처리되지만 setTimeOut 등을 이용하면 비동기로 사용할 수도 있음.

function timeOut() {
  console.log('1');
  setTimeout(() => {
    // 콜백함수를 전달하고 x초 뒤 실행할지.
    console.log('2');
  }, 5000);
  console.log('3');
}
timeOut(); // 1 -> 3 -> 2.
