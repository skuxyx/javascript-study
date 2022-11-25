// json => Javascript Object Notation.

let animal = {
  name: 'bichon',
  age: 1,
  play: function () {
    console.log('play');
  },
};

// Object를 json 으로 변환 => 함수는 데이터가 아니므로 json 에 포함되지 않음
// => 객체의 데이터 상태만 '문자열'로 받아옴.
let jsonAnimal = JSON.stringify(animal);

console.log(animal); // { name: 'bichon', age: 1, play: [Function: play] }

console.log(jsonAnimal); // {"name":"bichon","age":1}

let objAnimal = JSON.parse(jsonAnimal);
console.log(objAnimal);
