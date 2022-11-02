// 문자열 타입.

let string = '안녕하세요';
string = `안녕!`;

console.log(string);

// 특수문자 출력하는 방법.
string = '"안녕"';
console.log(string);

string = '안녕!\n엘리야.\t\t잘가';
console.log(string);

// 템플릿 리터럴 (Template Literal)
// => `` 를 사용하면 특수문자를 사용하지 않아도, 줄바꿈과 다양한 변수를 안에서 사용 가능.
let id = '엘리';
let greetings = "'안녕', " + id + '즐거운 하루 보내세요!';

console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내요!`;

console.log(greetings);
