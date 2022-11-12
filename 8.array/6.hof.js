const newArray = ['🍌', '🍓', '🍇', '🍓'];

// for (let i = 0; i < newArray.length; i++) {}

newArray.forEach((value) => {
  console.log(value);
});

// 조건에 맞는 아이템을 찾고자 할 때
const list = { name: 'bichon' };
const list1 = { name: 'poodle' };
const list2 = { name: 'retriver' };

const dogs = [list, list1, list2, list1];

let dog = dogs.find((value) => {
  return value.name === 'poodle';
});

console.log(dog);

// 조건에 맞는 아이템 인덱스를 찾고자 할 때
dog = dogs.findIndex((value) => {
  return value.name === 'poodle';
});

console.log(dog);

// every => '전부' 조건에 해당할 경우 true, 아니면 false.
dog = dogs.every((list) => list.name === 'bichon');
console.log(dog); // false

// some => 조건에 해당하는 배열이 존재하면 true, 아니면 false.
dog = dogs.some((list) => list.name === 'bichon');
console.log(dog); // true

// 조건에 해당할 경우 새로운 배열로 만들고자 할 때.
dog = dogs.filter((list) => list.name === 'poodle');
console.log(dog);
