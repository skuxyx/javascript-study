// 구조 분해 할당 => 배열, 객체 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 것.

let dog = ['bichon', 'poodle', 'maltese', 'retriever'];

// 기존 bichon 을 가져올 경우 아래와 같이 인덱스를 이용했지만
console.log(dog[0]);

// 1. 구조분해 할당을 이용하면
let [first, second, ...dogs] = dog;
console.log(first);
console.log(second);
console.log(dogs); // rest parameter.

// 2.
let num = [1, 2];
let [one, two, three = 3] = num;
console.log(one);
console.log(two);
console.log(three);

// 3.
function createUser() {
  return ['hello', 'bye'];
}
const array = createUser(); // 다음과 같이 불러올 수 있지만
console.log(array);

const [hi, bye] = createUser(); // 구조분해를 이용해서도 받아올 수 있다.
console.log(hi);
console.log(bye);

// 4.
let animal = {
  name: 'bichon',
  age: 1,
  kg: 2,
};

function displayAnimal({ name, age, kg }) {
  // 구조분해를 통해서 받아옴.
  console.log('이름', name);
  console.log('나이', age);
  console.log('무게', kg);
}
displayAnimal(animal);

let userInfo = {
  name: 'user',
  age: 20,
  fruit: {
    name: 'apple',
    color: 'red',
  },
};

function searchInfo({ fruit: { name } }) {
  console.log(name);
  // console.log(fruit); => error 변수가 아니므로 접근 불가.
}
searchInfo(userInfo);
