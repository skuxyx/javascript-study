const animal = {
  name: 'dog',
  display: function () {
    // 객체 안에서 속성에 접근하기 위해서는 this 를 붙여줘야 접근이 가능.
    console.log(`${this.name} : Dog`);
  },
};

animal.display();
