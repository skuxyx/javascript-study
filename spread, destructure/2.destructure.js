let userInfo = {
  name: 'user',
  age: 20,
  fruit: {
    name: 'apple',
    color: 'red',
  },
};

function searchInfo({ fruit: { name } }) {
  console.log(name);
  //  console.log(fruit); => error 변수가 아니므로 접근 불가.
}
searchInfo(userInfo);
