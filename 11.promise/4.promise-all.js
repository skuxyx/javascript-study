// Promise.all

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

// bichon, poodle 함수를 같이.
bichon()
  .then((bichonfrise) =>
    poodle().then((poodle) => {
      return [bichonfrise, poodle];
    })
  )
  .then(console.log); // bichon() 출력에 1초, poodle() 출력에 3초 => 4초가 지난 후 출력.

// Promise.all => 함수를 이용해서 병렬적으로 한번에.
Promise.all([bichon(), poodle()]).then((animal) =>
  console.log('promise all :', animal)
);

// Promise.race => 가장 빨리 수행 된 Promise의 결과값만 받아옴.
Promise.race([bichon(), poodle()]).then((animal) =>
  console.log('promise race :', animal)
);
