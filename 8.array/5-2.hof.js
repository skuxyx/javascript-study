// Map 배열 아이템을 변환하고자 할 때 ( 새로운 배열로 생성 )

const num = [1, 2, 3, 4];
let number = num.map((list) => list * 2);
// console.log(number); // [2,4,6,8];

number = num.map((list) => {
  if (list % 2 === 0) {
    return list * 2;
  } else {
    return list;
  }
});
console.log(number);

// FlatMap ( flat 과 비슷, 배열을 펼쳐줌 )
number = ['flat', 'map'].flatMap((list) => list.split(' '));
console.log(number);

// sort 배열 아이템 정렬 ( 오름차순, 문자열 형태로 변환 )
// 새로운 배열을 만드는 것이 아닌, 기존 배열을 변경시킴!

let dog = ['poodle', 'bichon', 'retriever'];
console.log(dog.sort()); // [ 'bichon', 'poodle', 'retriever']

let sortNumber = [0, 3, 2, 5, 21, 11];
console.log(sortNumber.sort()); // 문자열 형태로 변환해서 [ 0, 11, 2, 21, 3, 5 ] 가 출력됨.
sortNumber.sort((a, b) => a - b); // a, b에 배열을 순차적으로 넣어서 계산
console.log(sortNumber); // => [ 0, 2, 3, 5, 11, 21 ]

// reduce, 배열의 요소들을 하나의 결과로 반환.
let reduceNumber = [1, 2, 3, 4, 5, 6, 7, 8].reduce((result, value) => {
  result += value; // 1, 3, 6, 10 ,,,,
  return result;
}, 0); // 초기화할 값(result)에 initialValue를 전달해서 초기값을 설정할 수 있음.
// 현재 코드에는 0으로 설정했기 때문에 result = 0.
console.log(reduceNumber);
