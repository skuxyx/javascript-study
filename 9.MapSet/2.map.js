// Map => [key, value] 으로 이루어짐.
// key 중복 불가, value 중복 가능 순서상관 X,
// Object 와 비슷함 (key : value).

// let map = new Map();

let map = new Map([
  ['dog1', 'bichon'],
  ['dog2', 'poodle'],
]);

console.log(map);

// 크기를 확인하고자 할 때.
console.log(map.size);

// Map 안에 존재하고 있는 아이템인지 확인.
// set과 다르게 key의 값으로 확인해야 함.
console.log(map.has('dog1')); // true
console.log(map.has(0)); // false

// 순회도 가능
map.forEach((value, key) => console.log(key, value));

// 찾기 ( map.get('key') , key에 해당하는 value 를 가지고 옴 )
console.log(map.get('dog1'));

// 추가
map.set('dog3', 'maltese');
console.log(map);

// 삭제
map.delete('dog3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);
