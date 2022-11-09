class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static makeRandomAnimal() {
    return new Animal('cat', 4);
  }
  display = () => {
    console.log(`${this.name} : ${this.age}`);
  };
}

const cat = Animal.makeRandomAnimal();
console.log(cat);
