// spread 연산자.
function sum(a, b, c, d) {
  return a + b + c + d;
}
const num = [1, 2, 3, 4];

// console.log(sum(num[0], num[1], num[2], num[3]));
console.log(sum(...num)); // spread 연산자를 이용하면 간단.

// rest 연산자.
function sum2(a, b, ...num) {
  console.log(num);
}
// a = 1, b = 2
// ...num = [ 3,4,5,6,7 ] => 배열로 만듬
sum2(1, 2, 3, 4, 5, 6, 7);

// concat [ 배열합칠때 사용 ]

let dog = ['bichon', 'poodle'];
let dog2 = ['maltese'];

// let dogs = dog.concat(dog2);
let dogs = [...dog, ...dog2];
console.log(dogs);

// object.
let fruit = {
  name: 'apple',
};
let update = {
  ...fruit,
  color: 'red',
};
console.log(update);
