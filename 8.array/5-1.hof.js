const newArray = ['π', 'π', 'π', 'π'];

// for (let i = 0; i < newArray.length; i++) {}

newArray.forEach((value) => {
  console.log(value);
});

// μ‘°κ±΄μ λ§λ μμ΄νμ μ°Ύκ³ μ ν  λ
const list = { name: 'bichon' };
const list1 = { name: 'poodle' };
const list2 = { name: 'retriver' };

const dogs = [list, list1, list2, list1];

let dog = dogs.find((value) => {
  return value.name === 'poodle';
});

console.log(dog);

// μ‘°κ±΄μ λ§λ μμ΄ν μΈλ±μ€λ₯Ό μ°Ύκ³ μ ν  λ
dog = dogs.findIndex((value) => {
  return value.name === 'poodle';
});

console.log(dog);

// every => 'μ λΆ' μ‘°κ±΄μ ν΄λΉν  κ²½μ° true, μλλ©΄ false.
dog = dogs.every((list) => list.name === 'bichon');
console.log(dog); // false

// some => μ‘°κ±΄μ ν΄λΉνλ λ°°μ΄μ΄ μ‘΄μ¬νλ©΄ true, μλλ©΄ false.
dog = dogs.some((list) => list.name === 'bichon');
console.log(dog); // true

// μ‘°κ±΄μ ν΄λΉν  κ²½μ° μλ‘μ΄ λ°°μ΄λ‘ λ§λ€κ³ μ ν  λ.
dog = dogs.filter((list) => list.name === 'bichon');
console.log(dog);
