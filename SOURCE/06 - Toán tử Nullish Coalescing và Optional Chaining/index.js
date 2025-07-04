const people = {
  name: 'John',
  age: 30,
  job: {
    title: 'software engineer',
    level: 'senior',
  },
};

// OPTIONAL CHAINING: ?.

// let childrenName = people.children.name; // Lỗi: Cannot read properties of undefined (reading 'name')
let childrenName = people?.children?.name;
// console.log(childrenName);

const employee = {
  name: 'Jane',
  age: 25,
  job: {
    title: 'data analyst',
    level: 'junior',
    getLevel: { return: 'junior' },
  },
};

// console.log(employee.job.getAge()); // Lỗi: employee.job.getAge is not a function
// console.log(employee.job.getAge?.());

// NULLISH COALESCING: ??
function getCity(people) {
  // const city = people?.city;
  const city = people?.city ?? 'Unknown City';
  // ?? : Kiểm tra vế bên trái có phải null hay undefined không?

  // const city = people?.city || 'Unknown City';
  // || : Kiểm tra vế bên trái có phải falsy value không?
}
// console.log(getCity(people));

// Ví dụ so sánh ?? và ||
// let age = 0 || 'Unknown';
let age = 0 ?? 'Unknown';
// console.log(age);
