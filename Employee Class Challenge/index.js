class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  const johnDoe = new Employee("naveen", "Manager", 80000);
  console.log(johnDoe.getSalary()); 
    