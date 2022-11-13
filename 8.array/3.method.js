const dog = ['retriever', 'bichon', 'pomeranian'];

// 배열인지 아닌지 확인하고자 할 때.
// console.log(Array.isArray(dog)); // true
// console.log(Array.isArray({})); // false

// ---------------------------------------------------

// 특정 아이템의 위치를 찾고자 할 때.
// console.log(dog.indexOf('bichon')); // 1

// ---------------------------------------------------

// 특정 아이템이 존재하는지 확인할 때
// console.log(dog.includes('pomeranian')); // true

// ---------------------------------------------------

// unshift , push 둘 다 배열 자체를 수정하고 길이를 리턴.
// 배열 추가 ( 맨 앞에 추가 )
dog.unshift('maltese');
// console.log(dog);

// 배열 추가 ( 맨 뒤에 추가 )

dog.push('poodle');
// console.log(dog);

// ---------------------------------------------------

// shift, pop 둘 다 배열 자체를 수정하고 삭제 된 아이템을 리턴.
// 배열 삭제 ( 맨 앞에 삭제 )

let shift = dog.shift();
// console.log(shift); // maltese
// console.log(dog);

// 배열 삭제 ( 맨 뒤에 삭제 )
// 제거 된 아이템을 리턴.

let pop = dog.pop();
// console.log(pop); // poodle
// console.log(dog);

// ---------------------------------------------------

// 중간에 위치한 아이템 추가 / 삭제.
// 배열 자체를 수정하고 삭제 된 아이템을 리턴.
// let splice = dog.splice(0, 1); // 0부터 시작해서 1개를 삭제.
// console.log(splice); // retriever

// dog.splice(0, 0, 'maltese'); // 0부터 시작해서 0개를 삭제하고 'maltese' 추가.
// dog.splice(1, 0, 'maltese'); // 1부터 시작해서 0개를 삭제하고 'maltese' 추가.
// dog.splice(0, 1, 'maltese'); // 0부터 시작해서 0개를 삭제하고 'maltese' 추가.
// dog.splice(1, 1, 'maltese'); // 1부터 시작해서 1개를 삭제하고 'maltese' 추가.

console.log(dog);

// ---------------------------------------------------

// const dog = ['retriever', 'bichon', 'pomeranian'];

// 기존 배열이 아닌, 새로운 배열을 만듬.
// slice 메서드는 시작 인덱스는 포함, 끝나는 인덱스는 미포함.
let array = dog.slice(0, 2); // 0부터 시작해서 1까지 복사.
console.log('수정', array); //
console.log('수정', dog); // slice 를 했음에도 기존과 동일함.

// ---------------------------------------------------

// 배열을 합치고자 할 경우.
// 기존 배열은 수정되지 않고 새로운 배열을 만듬.

let array1 = ['A', 'B', 'C'];
let array2 = ['D', 'E', 'F'];
let array3 = array1.concat(array2);
// console.log(array1); concat을 해도 [1,2,3] 기존과 동일.
console.log(array3);

// ---------------------------------------------------

// 중첩 배열 펼치기.
let array4 = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(array4.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ] , 배열안에 배열이 존재하는 경우 풀어주지 않음.
console.log(array4.flat(2)); // [ 1, 2, 3, 4, 5, 6 ] , flat(2)로 설정하면 배열안에 배열도 풀어서 보여줌.

// ---------------------------------------------------

// 배열 순서를 거꾸로.
let arrayreverse = array1.reverse();
console.log(arrayreverse); // [C,B,A]

// ---------------------------------------------------

// 배열 자체를 수정하고, 배열 값을 특정한 값으로.
let fillArray = [1, 2, 3, 4, 5, 6];
// console.log(fillArray); // [1,2,3,4,5,6]

fillArray.fill(0);
console.log(fillArray); // [0,0,0,0,0,0]

fillArray.fill('A', 1, 3); // 1번째 인덱스부터 2번째 인덱스까지 문자열 A로
console.log(fillArray); // [ 0, 'A', 'A', 0, 0, 0 ]

// ---------------------------------------------------

// 배열 문자열로.
let text = fillArray.join();
console.log(text); // 0, A, A, 0, 0, 0

let text1 = fillArray.join(' | ');
console.log(text1); // 0 | A | A | 0 | 0 | 0
