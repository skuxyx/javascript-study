// Javascript 의 배열은 연속적으로 이어져 있지 않음, 오브젝트와 유사.

// 배열 만드는 방법
let array = new Array(6); // 5개의 배열을 저장
console.log(array);

array = new Array(1, 2, 3, 4, 5); // 배열에 넣어서 만들 수 있음.
console.log(array);

array = Array.of(1, 2, 3, 4);
console.log(array);

const newArray = [1, 2, 3];
console.log(newArray);

// Array.from => 기존 배열로부터 새로운 배열을 만들고자 할 때.
array = Array.from(newArray); // newArray의 배열을 복사해서 array로.
console.log(array);

array = Array.from({
  0: 'H',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
  length: 5,
});
console.log(array);
