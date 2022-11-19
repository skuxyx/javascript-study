function Animal(name, age) {
  this.name = name;
  this.age = age;

  // 인스턴스 레벨의 함수.
  //   this.helloAnimal = () => {
  //     console.log(`안녕 ${this.name}`);
  //   };
}

// 프로토타입 레벨의 함수.
Animal.prototype.helloAnimal = function () {
  console.log(`안녕 ${this.name}`);
};

let poodle = new Animal('푸들', 2);
let bichon = new Animal('비숑', 1);

console.log(poodle);
console.log(bichon);

poodle.helloAnimal();
bichon.helloAnimal();

// LOG : Animal { name: '푸들', age: 2, helloAnimal: [Function (anonymous)] }
// LOG : Animal { name: '비숑', age: 1, helloAnimal: [Function (anonymous)] }
// => 인스턴스 레벨에 만들어진 함수는 객체를 만들 때 마다 함수가 같이 생성됨 => 메모리 낭비.
// => 이를 해결하려면 11 ~ 14번 코드와 같이 프로토타입 레벨의 함수로 만들어 줌.

// 인스턴스(자식) 레벨에서 함수를 오버라이딩 하면 프로토타입(부모)의 프로퍼티는 사라짐.
poodle.helloAnimal = () => {
  console.log('함수를 재정의하면 본 문구가 출력됨.');
};
poodle.helloAnimal();
