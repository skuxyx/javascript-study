// 접근제어자 ( 캡슐화 )
// 외부에서 값을 변경하는 것을 막고자 할 경우 '#' 사용.
class Animal {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  display = () => {
    console.log(`${this.#name} : ${this.#age}`);
  };
}

const cat = new Animal('Cat', 3);
// console.log(cat); // console => Animal { display: [Function: display], name: 'Cat', age: 3 }

// 외부에서 접근해서 값을 변경할 수 있음.
// cat.name = 'dog'; // console => Animal { display: [Function: display], name: 'dog', age: 3 }

// cat.#name = 'dog'; // #을 붙이면 외부에서 접근 불가.
// console.log(cat); // console => Private field '#name' must be declared in an enclosing class ( 클래스 안에서만 접근 가능 )

// console => Animal { display: [Function: display] }
// '#'을 사용했기 때문에 외부에서 정보를 확인할 수 없고, display 함수만 표기됨.
console.log(cat);
