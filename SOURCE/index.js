const users = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avartar: 'https://reqres.in/img/faces/7-image.jpg',
    tags: ['AAA', 'BBB'],
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avartar: 'https://reqres.in/img/faces/7-image.jpg',
    tags: ['BBB'],
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avartar: 'https://reqres.in/img/faces/8-image.jpg',
    tags: ['AAA'],
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avartar: 'https://reqres.in/img/faces/9-image.jpg',
    tags: ['CCC', 'BBB'],
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avartar: 'https://reqres.in/img/faces/10-image.jpg',
    tags: ['AAA', 'DDD'],
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avartar: 'https://reqres.in/img/faces/7-image.jpg',
    tags: ['DDD'],
  },
];

// reduce: Dùng để lặp qua mảng và trả về một giá trị duy nhất (tích lũy giá trị)
const customUsers = users.reduce((acc, cur) => {
  // accumulate => tich luy => acc = {}
  return { ...acc, [cur.email]: cur };
}, {});

// console.log(customUsers);
// console.log({ customUsersValues: Object.values(customUsers) });

const arrayUsers = Object.values(customUsers).reduce((acc, cur) => {
  // acc = []
  return [...acc, cur.email];
}, []);
console.log(arrayUsers);

const numbers = [1, 2, 3, 1111, 222];
const total = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
// console.log({ total });

const filterUser = users.filter(user => {
  // let found = false;
  // user.tags.forEach((tag) => {
  //   if (tag === "BBB") {
  //     found = true;
  //   }
  // });
  // return found;

  // some: Kiểm tra xem có ít nhất một phần tử nào trong mảng thỏa mãn điều kiện
  // return user.tags.some((tag) => {
  //   return tag === "BBB";
  // }); // => true ngược lại => false

  // every: Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện
  return user.tags.every(tag => {
    return tag === 'BBB';
  });
});
// console.log({ filterUser });

// map: Tạo mảng mới dựa trên mảng hiện tại, không thay đổi mảng hiện tại
// const customers = users.map(user => {
//   return { ...user, last_name: `${user.last_name} Edited` }
// })
// console.log({ customers, users })

// filter: Lọc dữ liệu dựa trên điều kiện
// const filterUser = users.filter(user => {
//   return user.first_name === 'Lindsay' || user.first_name === 'Rachel'
// })

// find: Tìm kiếm một phần tử đầu tiên thoả mãn dièu kiện
// const findUser = users.find(user => {
//   return user.first_name === 'Lindsay' || user.first_name === 'Rachel'
// })

// console.log({ filterUser, findUser })
