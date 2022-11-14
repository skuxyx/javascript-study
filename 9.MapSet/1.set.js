// let set = new Set();
// 배열과 다르게 인덱스 X => 순서 X, 중복 X.

let set = new Set([1, 2, 3, 4, 5]);
console.log(set);

// 크기를 확인하고자 할 때.
console.log(set.size);

// set 안에 존재하고 있는 아이템인지 확인
console.log(set.has(5)); // true

// 새로운 아이템 추가.
// set.add(5); => 이미 set에 존재하고 있으므로 추가되지 않음.
set.add(6);
console.log(set);

// 아이템 삭제.
set.delete(6);
console.log(set);

// 전부 삭제.
set.clear();
console.log(set);

// 순회도 가능
//  set.forEach((list) => console.log(list)));

for (const list of set.values()) {
  //  console.log(list);
}

// 객체도 set 으로 사용 가능.
let bichon = { name: 'bichon', age: 3 };
let maltese = { name: 'maltese', age: 1 };
let dog = new Set([bichon, maltese]);
console.log(dog);

bichon.age = '2';
dog.add(bichon);
console.log(dog);
