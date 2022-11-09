class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('민수', '박');
console.log(student.firstName);
console.log(student.fullName); // get

student.fullName = '김진수'; // set
