// null, undefined 비슷해 보이지만 서로 다름.

// undefined 인 경우 변수의 값이 있는지 없는지 모름.
let variable;
console.log(variable);

// 명시적으로 null 을 할당하면 비어있다는 것과 동일한 표현.
variable = null;
console.log(variable);

let activeItem; // 활성화 된 아이템이 있는지 없는지 모르는 상태.
activeItem = null; // 활성화 된 아이템이 없는 상태.

console.log(typeof null);
console.log(typeof undefined);
