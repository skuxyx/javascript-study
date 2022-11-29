'use strict';
// 함수 내부에서 This.
// 느슨한 모드에서는 globalThis , 'use strict' => 엄격 모드에서는 undefined.

function hello() {
  console.log(this);
}
hello();

// Class, 생성자 함수에서 this => 생성 될 인스턴스 자체.

function Animal2(bichon) {
  this.bichon = bichon;
  this.name = function () {
    console.log(this.name);
  };
}
const animalName = new Animal2('비숑프리제');
animalName.name();
