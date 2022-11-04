// 조건문 ( Conditional Statement )
// switch => 정해진 범위안의 값에 대해 특정한 일을 해야할 때 사용.
// 각각의 case는 break 를 항상 걸어줘야 함.
// if else if else ,,, else

let day = 11; // 0 : 월요일, 1 : 화요일, 2 : 수요일 ,,, 6 : 일요일.
let dayName;

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음');
}
console.log(dayName);

let condition = 'okay';
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨';
    break;
}
console.log(text);
