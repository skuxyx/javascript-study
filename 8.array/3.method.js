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
dog.splice(1, 1, 'maltese'); // 1부터 시작해서 1개를 삭제하고 'maltese' 추가.
console.log(dog);
