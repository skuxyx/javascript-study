// Javascript에서 this를 정적으로 사용하는 방법.
// 1. bind 함수 사용.
// 2. Arrow ( => ) 함수 사용 => arrow 함수는 렉시컬 환경에서의 this 기억.
// => 화살표 함수 밖에서 가장 근접한 스코프 this를 가르킴.

function Animal(name) {
  this.name = name;
  this.hello = () => {
    console.log(`${this.name}이 일어났어요.`);
  };
  // 이제부터 this.hello는 동적이 아닌 정적.
  // => this.hello = this.hello.bind(this);
}

function Animal2(name) {
  this.name = name;
  this.hello = function () {
    console.log(`${this.name}이 잠을 잡니다.`);
  };
}

const bichon = new Animal('Bichon');
const poodle = new Animal2('poodle');
bichon.hello();
poodle.hello();

poodle.hello = bichon.hello;
poodle.hello();
bichon.hello();
