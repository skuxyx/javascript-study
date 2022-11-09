class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat');
  }
  sleep() {
    console.log('sleep');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.sleep();
tiger.eat();
// tiger.play(); => tiger.play is not a function, class Animal 에 play() 함수 없음.

class Dog extends Animal {
  constructor(color, name) {
    super(color); //
    this.name = name;
  }
  play() {
    console.log('play');
  }
  // 오버라이딩 => 부모 클래스에 있는 함수를 자식클래스에서 새롭게 사용하기 위함.
  eat() {
    super.eat(); //
    console.log('eat!!!');
  }
}
const dog = new Dog('black', 'Tom');
console.log(dog);
dog.sleep();
dog.eat();
dog.play(); // 공통 속성은 상속받고 필요한 부분은 함수를 작성해서 사용.
