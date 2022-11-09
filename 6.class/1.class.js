class Animal {
  // 생성자 => new 키워드로 객체를 생성할 때 호출하는 함수.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 함수 또한 생성자 함수안에 넣어도 상관 없지만 보통은 생성자 밖에서 정의.
  display = () => {
    console.log(`${this.name} : ${this.age}`);
  };
}

const dog = new Animal('Dog', 2);

console.log(dog);
