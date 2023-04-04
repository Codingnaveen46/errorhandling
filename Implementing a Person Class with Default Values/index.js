class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  const person1 = new Person("mithun", 20);
console.log(person1.getDetails()); // outputs "Name: John Doe, Age: 30"

const person2 = new Person();
console.log(person2.getDetails()); // outputs "Name: Unknown, Age: 0"
