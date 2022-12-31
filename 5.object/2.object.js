const obj = {
  name: 'abc',
  age: 30,
};

obj.name;
obj.age;
// delete obj.name; => 삭제

// ---------------------------------------------------------

// 동적으로 속성 접근 ( 대괄호 표기법 사용 )
function objSearch(obj, key) {
  return obj[key]; // obj['name']
}
console.log(objSearch(obj, 'name')); // result : abc

// 동적으로 속성 추가
function addObj(obj, key, value) {
  return (obj[key] = value);
}
console.log(addObj(obj, 'city', 'seoul'));

// 동적으로 삭제
function deleteObj(obj, key) {
  delete obj[key];
}
console.log(deleteObj(obj, 'city'));

console.log(obj);

// ---------------------------------------------------------

const obj2 = {
  name: 'pratice',
  age: 20,
  city: 'yongin',
};

// Object.keys() => 키 목록을 배열로 반환.
console.log(Object.keys(obj2)); // [ 'name', 'age', 'city' ]

// 배열을 리턴하므로 반복문을 이용할 수 있음.
const arr = Object.keys(obj2);

for (let i = 0; i < arr.length; i++) {
  const key = arr[i];
  const value = obj2[arr];

  console.log('key => ' + key + ' value => ' + value);
}

// Object.values() => 객체의 값을 배열로 반환.
console.log(Object.values(obj2)); // [ 'pratice', 20, 'yongin' ]

// Object.entries() => 객체의 키, 값을 배열로 반환.
console.log(Object.entries(obj2)); // [ [ 'name', 'pratice' ], [ 'age', 20 ], [ 'city', 'yongin' ] ]

// for.. in 을 이용해서 객체 키,값을 받아올 수 있음.
for (let key in obj2) {
  console.log(key, obj2[key]);
}
