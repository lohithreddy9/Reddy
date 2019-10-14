// // function Person(firstName, lastName) {
// //     this.FirstName = firstName || "unknown";
// //     this.LastName = lastName || "unknown";
// // };

// // Person.prototype.__proto__.getFullName = function () {
// //     return this.FirstName + " " + this.LastName;
// // }
// // function Student(firstName, lastName, schoolName, grade)
// // {
// //    Person.call(this, firstName, lastName);
// //     this.SchoolName = schoolName || "unknown";
// //     this.Grade = grade || 0;
// // }
// // Student.prototype = Person.prototype;

// // var s1= new Student('f', 'k', 'sh', 'bb' )
// // console.log(s1)
// // console.log(s1.getFullName())


// function UserException(message) {
//     this.message = message;
//     this.name = 'UserException';
//   }
  
//   // Make the exception convert to a pretty string when used as a string 
//   // (e.g. by the error console)
//   UserException.prototype.toString = function() {
//     return this.name + ': "' + this.message + '"';
//   }
  
//   // Create an instance of the object type and throw it
//   throw new UserException('Value too high');

class Animal { 
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name,age,color) {
      super(name,age); // call the super class constructor and pass in the name parameter
      this.color = color;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
      console.log(`age is ${this.age} `)
      console.log(`color is ${this.color}`)
      //super.speak();
    }
  }
  
  let d = new Dog('Mitzie','21','blue');

  d.speak();