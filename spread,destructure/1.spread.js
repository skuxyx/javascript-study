// spread 연산자.
// => 객체, 배열을 펼쳐서 나열할 수 있다.

function sum(a, b, c, d) {
  return a + b + c + d;
}
const num = [1, 2, 3, 4];

// console.log(sum(num[0], num[1], num[2], num[3]));
console.log(sum(...num)); // spread 연산자를 이용하면 간단.

// spread 활용해서 배열 하나로 합치기.

let newArr = [1, 2, 3, 4, 5];
let newArr2 = [6, 7, 8, 9, 10];

let result = [...newArr, ...newArr2];
console.log(result); // [1,2,3,4,5,6,7,8,9,10]

// spread 활용해서 배열 가지고 오는 것도 쉽게 가능.

result = [...newArr];
console.log(result); // [1,2,3,4,5]

// spread는 객체에서도 사용이 가능.

let fruit = {
  name: 'apple',
};
let update = {
  ...fruit,
  color: 'red',
};
console.log(update);

// ----------------------------------------------------------------

// rest 연산자.
// => 객체, 배열, 함수 파라미터에서 사용 가능.

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
