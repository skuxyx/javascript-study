// const animal = {
//   name: 'dog',
//   display: function () {
//     console.log(`${this.name} : Dog`);
//   },
// };

// const animal2 = {
//   name: 'cat',
//   display: function () {
//     console.log(`${this.name} : Cat`);
//   },
// };

// 생성자 함수
// 'A'nimal => 대문자로 작성하면 생성자 함수를 만듬.
function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.display = () => {
    console.log(`${this.name} : ${this.age}`);
  };
  // 생성자 함수에서는 return 생략해도 상관 없음.
  return this;
}

const dog = new Animal('Dog', 2);

console.log(dog);
