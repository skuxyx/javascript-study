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
