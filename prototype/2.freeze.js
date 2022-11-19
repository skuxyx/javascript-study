// Object.freeze() => 동결.
// 속성 재정의, 삭제, 추가, 쓰기 불가.
const dog = { name: 'bichon' };
const dog2 = { name: 'poodle', age: 2, dog3: dog };

Object.freeze(dog2); // Object 를 동결 했기 때문에
dog2.name = 'maltese'; // name 을 변경하더라도 변경되지 않음.
console.log(dog2); //

dog2.age = 4;
console.log(dog2); // 수정 불가

delete dog2.name;
console.log(dog2); // 삭제 불가

// dog3 는 중첩이 되어있어서 freeze 를 주더라도 동결되지 않음 => 변경 가능.
dog.name = 'maltese';
console.log(dog);

// -------------------------------------------------------------------------

// Object.seal => 밀봉.
// 값만 수정이 가능 [ 추가 X, 삭제 X, 속성 재정의 X ]
const animal = {};

// 객체 복사 ( => animal Object에 dog2 를 복사해서 가지고 옴 )
Object.assign(animal, dog2);
// const animal = { ...dog }; // spread 연산자를 이용하는 것과 동일.
Object.seal(animal);
console.log(animal);

animal.name = '비숑'; // 수정 가능
console.log(animal);

delete animal.dog3; // 삭제 불가
console.log(animal);

// -------------------------------------------------------------------------

// 확장 금지.
const cat = { name: 'cat' };
Object.preventExtensions(cat);
console.log(Object.isExtensible(cat));

cat.name = 'cat2'; // 수정 가능.
console.log(cat);

delete cat.name; // 삭제 가능.
console.log(cat);

cat.age = '2'; // 추가 불가능.
console.log(cat);
