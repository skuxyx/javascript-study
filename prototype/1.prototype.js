const dog = { name: 'bichon', age: 2 };

console.log(Object.keys(dog)); // key 값만 배열로 출력
console.log(Object.values(dog)); // value 값만 배열로 출력.
console.log(Object.entries(dog)); // key, value 값 배열로 출력.

// 객체 안에 key가 있는지 true, false 로 리턴
// dog 객체 안에 age 가 존재 하는지? => true
console.log('age' in dog);

// 오브젝트의 각 프로퍼티는 프로퍼티 디스크립터라 부르는 객체에 저장.
const descriptros = Object.getOwnPropertyDescriptors(dog);
console.log(descriptros);

// console.log(descriptros);
//     name: {
//       value: 'bichon',
//       writable: true, => 값을 수정할 수 있는지?
//       enumerable: true, => 값을 열거할 수 있는지?
//       configurable: true => 속성을 수정할 수 있는지?
//     },

// false 로 명시하지 않으면 기본적으로 true 로 설정됨.
Object.defineProperty(dog, 'name', {
  value: 'poodle',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // poodle

// enumerable 를 false 로 명시했기 때문에 name 은 출력이 안됨.
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

delete dog.name;
console.log(dog.name);
