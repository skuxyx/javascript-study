// Object 객체
// {key : value}
// => key에는 문자, 문자열, 숫자, 심볼 , value에는 원시값, 객체(함수)

let animal = {
  name: 'cat',
  animal: 'cat1',
  ['animal2']: 'cat2',
  0: 1,
};

console.log(animal.name); // 마침표 표기법 dot notation
console.log(animal['animal2']); // 대괄호 표기법 bracket notation.
console.log(animal['name']); // 대괄호 표기법 bracket notation.

animal.dogs = 'dog';

console.log(animal.dogs);
console.log(animal['dogs']);

delete animal.dogs;

console.log(animal);
