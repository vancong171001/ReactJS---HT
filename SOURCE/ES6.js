// ------------------------- ES6 -------------------------
// scope là phạm vi của biến, nó xác định biến đó có thể được truy cập ở đâu trong mã nguồn
// block scope
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

const todoList = ['Learn React', 'Learn NodeJS', 'Learn NextJS'];

// template literals
const age = 23;
// console.log(`Nam nay toi ${age} tuoi
// Toi ten la David Nguyen`);

// Enhanced Object Property
// Property Shorthand
// Method Property
// Computed Property Key

function person(name, age) {
  const salary = 'Salary';
  return {
    name,
    age,
    getName() {
      return `${this.name} ${this.age}`;
    },
    [`${salary}OfDavid`]: 20000,
  };
}

// console.log(person('David', 23));
// console.log(person('David', 23).getName());

// Extended Parameter Handling
// Default Parameters
// Rest Parameters

function getNameES6(name = 'Sam', age = 23, ...rest) {
  console.log(name + ' ' + age);
  console.log('rest', rest);
  // rest: Dùng để lấy tất cả các tham số còn lại và đưa vào một mảng
}

// getNameES6();
// getNameES6('David', 24, 'ReactJS', 'NodeJS');

// Spread Operator
const todoList2 = ['Learn React', 'Learn NodeJS', 'Learn NextJS'];
const todoListMore = ['Learn TypeScript', 'Learn GraphQL', ...todoList2];

// console.log('todoListMore', todoListMore);

const person2 = {
  name: 'David',
  age: 23,
};

const worker = {
  job: 'Developer',
  ...person2,
};

// console.log('worker', worker);

// Arrow Function
var person3 = {
  name: 'David',
  age: 23,
  getDescription: function () {
    console.log(
      'Toi ten la ' + this.name + '. Nam nay toi ' + this.age + ' tuoi'
    );
    // const getAge = () => ({age: this.age});
    const getAge = name =>
      console.log(`ES6 - Nam nay toi ${this.age} tuoi. Tên tôi là ${name}`);
    getAge('Sam');
  },
};

// person3.getDescription();

// Destructuring Assignment
const todoList3 = ['Learn React', 'Learn NodeJS', 'Learn NextJS'];
const [first, , third] = todoList3;
// console.log({ first, third });

const person4 = {
  name: 'David',
  age: 23,
  salary: 20000,
};
const { name, salary } = person4;
// console.log({ name, salary });

// Kết hợp với default value
const list = [23, 32, 12];
const [a, b, c = 100] = list;
// console.log({ a, b, c });

const getFullName = ([firstName, lastName]) => {
  console.log(`ES6 - Tên đầy đủ của tôi là ${firstName} ${lastName}`);
};

// getFullName({ firstName: 'David', lastName: 'Nguyen' });
// getFullName(['David', 'Nguyen']);

// Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getJob() {
    console.log(`Cong viec cua toi la ${this.job}`);
  }
}

class Worker extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
}

const worker_1 = new Worker('Sam', 22, 'Developer');
// console.log(worker_1);
// worker_1.getJob();

// Promise // asynchronous
const getAllDataFromDB = new Promise((resolve, reject) => {
  setTimeout(() => {
    var database = ['ha noi', 'ho chi minh', 'da nang'];
    // resolve(database);
    reject(new Error('Error fetching data from database'));
    console.log('getting data from database');
  }, 3000);
});

getAllDataFromDB
  .then(data => console.log('data', data))
  .catch(err => console.log(err));
