// 클로저의 사용 목적.
// => 1. 캡슐화와 정보 은닉 => Class에서 private 필드와 유사.
// => 2. 공개 함수를 통한 데이터 조작.

// 클로저를 활용한 예시.

function plus() {
  let a = 0;
  function increase() {
    a++;
    console.log(a);
  }
  return increase;
}
const incre = plus();
incre(); // 1
incre(); // 2

// Class 를 활용한 예시.

class numPlus {
  #a = 0;
  increase() {
    this.#a++;
    console.log(this.#a);
  }
}
const incre1 = new numPlus(); // 인스턴스를 만들어야 함.
incre1.increase();
incre1.increase();
incre1.increase();
incre1.increase();
incre1.increase();
