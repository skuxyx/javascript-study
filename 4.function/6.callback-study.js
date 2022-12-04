// index.html 참고해서 공부.
// setTimeout => 브라우저에서 제공하는 Web API => 일정 시간 후 전달한 콜백함수를 전달.
// 콜백함수 => 전달해준 함수를 일정 시간 후 사용.

console.log('1');
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');

// 동기 콜백

function printHello(str) {
  str();
}
printHello(() => {
  console.log('Hello');
});

// 비동기 콜백
function printWithDelay(str, timeout) {
  setTimeout(str, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 콜백지옥 => 좋지 않은 코딩 방식.
// => 코드 가독성 ↓ , 로직 이해하기 어려움, 유지보수 어려움.

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('login error'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('error'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
