// 옵셔널 체이닝.
// .?
let num = { number: 1 };
let numCheck = num?.number; // num이 존재하면 number에 접근하고, num이 존재하지 않으면 접근 X
console.log(numCheck);

let obj = { name: 'poodle', owner: { name: 'bichon' } };
// 기존에는
// let check = obj && obj.owner && obj.owner.name;

// 옵셔널 체이닝을 활용하면,
let check = obj?.owner?.name; // obj가 존재하고, owner가 존재한다면 name 에 접근.

console.log(check);
