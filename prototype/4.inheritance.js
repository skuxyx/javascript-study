// 프로토타입을 이용한 상속.
// HTML 이용해서 참고.

function Animal(name, age) {
  this.name = name;
  this.age = age;
}
Animal.prototype.helloAnimal = function () {
  console.log(`안녕 ${this.name}`);
};

// 생성자 함수
function Dog(name, age, newAnimal) {
  // Class에서 부모 생성자를 호출 => super();
  // Object.call = super()과 비슷함.
  Animal.call(this, name, age); // Animal의 this 를 Dog 함수의 this로.
  this.newAnimal = 'maltese';
}

// 17번 코드처럼 작성하지 않으면 14번 코드가 기본으로 적용됨.
// Dog.prototype = Object.create(Object.prototype);

// Object.create() 프로토타입 객체 및 속성을 가지는 '새 객체'를 만든다.
// => Dog가 가진 프로토타입을 Animal.prototype 으로 변경.
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.eat = () => {
  console.log('밥 먹을 시간');
};

const poodle = new Dog('푸들', 1, '비숑');

poodle.helloAnimal();
poodle.eat();

function Cat(name, age) {
  Animal.call(this, name, age);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.play = () => {
  console.log('놀자');
};

const cat1 = new Cat('고양이', 1);
cat1.helloAnimal();
cat1.play();
