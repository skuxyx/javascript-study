// Promise async - await.

function bichon() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('bichonfrise');
    }, 1000);
  });
}

function poodle() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('poodle');
    }, 2000);
  });
}

function maltese() {
  return Promise.reject(new Error('error'));
}

// async - await 을 이용한 방법.
// 함수 앞에 async keyword를 붙여주면 비동기 => promise return.
async function animal() {
  // bichon을 받아올 때 까지 기다린 후 값 자체를 변수에 할당.
  let dogBichon = await bichon();
  // poodle을 받아올 때 까지 기다린 후 값 자체를 변수에 할당.
  let dogPoodle = await poodle();
  return [dogBichon, dogPoodle];
}

animal().then((animal) => console.log(animal));
