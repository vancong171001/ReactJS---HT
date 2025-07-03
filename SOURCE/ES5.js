// ------------------------- ES5 -------------------------
// scope là phạm vi của biến, nó xác định biến đó có thể được truy cập ở đâu trong mã nguồn

var firstName = 'David'; // global scope

// function scope
function getName() {
  var lastName = 'Nguyen'; // local scope
  return firstName + ' ' + lastName;
}
// console.log(getName()); // David Nguyen

// template literals
var fullName = 'Toi ten la ' + firstName + '\n' + 'Nam nay toi 23 tuoi';

// Enhanced Object Property
// Property Shorthand
// Method Property
// Computed Property Key

// function person(name, age) {
//   return {
//     name: name,
//     age: age,
//     getName: function () {
//       return this.name + ' ' + this.age;
//     },
//   };
// }

var person = {
  name: 'David',
  age: 23,
};
var salary = 'Salary';
person[salary + 'OfDavid'] = 20000;

// console.log('es5-person', person);

// Extended Parameter Handling
// Default Parameters

// function getName(name, age) {
//   console.log(name + ' ' + age);
// }
// getName();

// var person2 = {
//   name: 'David',
//   age: 23,
//   getDescription: function () {
//     console.log(
//       'Toi ten la ' + this.name + '. Nam nay toi ' + this.age + ' tuoi'
//     );

//     var that = this;
//     function getAge() {
//       console.log('Nam nay toi ' + that.age + ' tuoi');
//     }

//     getAge();
//   },
// };

// person2.getDescription();

// Class
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

Person.prototype.getJob = function () {
  return 'Cong viec cua toi la ' + this.job;
};

var bob = new Person('Bob', 30);

var alice = Object.create(new Person('Alice', 25));
// console.log(alice.name);
// console.log(alice.age);
alice.job = 'Developer';
// console.log(alice.getJob());

// Promises
function getAllDataFromDB(callback) {
  console.log('start');
  setTimeout(() => {
    var database = ['ha noi', 'ho chi minh', 'da nang'];
    callback(database);
    console.log('getting data from database');
  }, 3000);
  console.log('end');
}

// callback hell

getAllDataFromDB(function (data) {
  console.log('Data from DB:', data);
});
