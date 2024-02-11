//Write code for the 1st task below this

// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method for Person
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
}

// Creating an instance of Person
const person1 = new Person('John', 25);
person1.greet(); // Outputs: Hello, my name is John, and I am 25 years old.

//Write your code above this line
//Write code for the 2nd task below this
// Constructor function for Student inheriting from Person
function Student(name, age, studentId) {
  // Inherit properties from Person
  Person.call(this, name, age);

  // Additional property for Student
  this.studentId = studentId;
}

// Inherit methods from Person
Student.prototype = Object.create(Person.prototype);

// Method for Student
Student.prototype.study = function () {
  console.log(`Student with ID ${this.studentId} is studying.`);
}

// Creating an instance of Student
const student1 = new Student('Alice', 20, 'S123');
student1.greet(); // Outputs: Hello, my name is Alice, and I am 20 years old.
student1.study(); // Outputs: Student with ID S123 is studying.


//Write your code above this line
//Write code for the 3rd task below this
// Adding a new method introduce to the Person prototype
Person.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}. Nice to meet you!`);
}


person1.introduce(); 
student1.introduce(); 


//Write your code above this line
//Write code for the 4th task below this


//Write your code above this line
//Write code for the 5th task below this


//Write your code above this line


