// Object.freeze() => 동결.
// 속성 재정의, 삭제, 추가, 쓰기 불가.
const dog = { name: 'bichon' };
const dog2 = { name: 'poodle', age: 23, fr: dog };

Object.freeze(dog); // Object 를 동결 했기 때문에
dog.name = 'maltese'; // name 을 변경하더라도 변경되지 않음.
console.log(dog); //

dog.age = 4;
console.log(dog);

delete dog.name;
console.log(dog);
