// 상속은 단 하나의 부모만 가지는 것이 원칙 => 다중 상속 허용 X
// 여러 함수를 상속하고자 할 경우 => Object.assign 사용.

const hello = {
  hello: function () {
    console.log(`${this.animal} 환영해요.`);
  },
};

const eat = {
  eat: function () {
    console.log(`${this.animal} 배고파요.`);
  },
};

function Animal(animal) {
  this.animal = animal;
}

// Object.assign(할당할 객체, 반영할 객체1, 객체2, 객체3,,,,)
Object.assign(Animal.prototype, hello, eat);

const dog = new Animal('bichon');
console.log(dog);
dog.hello();
dog.eat();
