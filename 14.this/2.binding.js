// this binding
// Java, C++, C# 등 대부분 객체지향 프로그래밍은 this가 항상 자신의 인스턴스를 가르킴.
// => 정적으로 인스턴스가 만들어지는 시점에 this 결정.

// JavaScript 에서는 누가 호출하냐에 따라, this 가 달라짐.
// => 호출하는 사람에 따라 동적으로 this 결정.

function Animal(name) {
  this.name = name;
  this.hello = function () {
    console.log(`${this.name}이 일어났어요.`);
  };
}

function Animal2(name) {
  this.name = name;
  this.hello = function () {
    console.log(`${this.name}이 잠을 잡니다.`);
  };
}

const bichon = new Animal('Bichon');
const poodle = new Animal2('poodle');
bichon.hello();
poodle.hello();

// ---------------------------------------------------------

bichon.hello = poodle.hello; // poodle의 this로 변환이 되서,
bichon.hello(); // Bichon이 잠을 잡니다. 가 출력 됨.
poodle.hello();

// ---------------------------------------------------------
