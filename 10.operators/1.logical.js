let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7, 8];

if (num1 && num2) {
  console.log('true');
}

// 단축평가
let nums = num1 && num2; // num1 true, num2 를 nums로 할당.
console.log(nums);

nums = num1 || num2; // num1 true 뒤에 확인 안하고 nums로 할당.
console.log(nums);

// => && 조건이 truthy, 무엇을 해야하는 경우.
// => || 조건이 falshy, 무엇을 해야하는 경우.

let bichon = { name: 'bichon' };
let poodle = { name: 'poodle', newAnimal: 'maltese' };

function animal(animal) {
  // 동물이 없는 경우
  if (!animal.name) {
    throw new Error('App Crash');
  }
  animal.name = '동물';
}

function newAnimal(animal) {
  animal.newAnimal = 'maltese';
}

// bichon.owner 가 없으므로 false, 따라서 newAnimal이 실행되지 않음.
bichon.newAnimal && newAnimal(bichon);
// poodle.owner 가 존재하므로 newAnimal 이 실행되어서 name을 maltese로 변경.
poodle.newAnimal && newAnimal(poodle);
console.log(bichon);
console.log(poodle);

// bichon.owner false 이지만 || (OR연산자)이므로 newAnimal이 실행되어서 maltese 추가.
bichon.newAnimal || newAnimal(bichon);
// poodle.newAnimal true 따라서 newAnimal 이 실행되지 않음.
poodle.newAnimal || newAnimal(poodle);
console.log(bichon);
console.log(poodle);

// null, undefined 를 확인하고자 할 때.
let num; // = { number : 1 };
// let numCheck = num.number; => num.number 찾을 수 없기 때문에 => app crash
let numCheck = num && num.number; // num 이 true 이므로 num.number 실행 X
console.log(numCheck); // undefined
