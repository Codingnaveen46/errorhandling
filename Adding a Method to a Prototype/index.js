// Create the Student prototype object
const Student = {
    name: '',
    printDetails() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
// Instantiate a Student object
const student1 = Object.create(Student);
student1.name = 'Mithun';

// Call the printDetails method
student1.printDetails(); // Output: "Hello, my name is Mithun"
  