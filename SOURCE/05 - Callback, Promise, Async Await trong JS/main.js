function test() {
  setTimeout(() => {
    console.log(1);
  }, 0);
  console.log(2);
  console.log(3);
}

// test();

// CALLBACK
// function httpGetAsync(theUrl, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState === 4 && xmlHttp.status === 200) callback(xmlHttp);
//   };
//   xmlHttp.open('GET', theUrl, true); // true for asynchronous
//   xmlHttp.send(null);
// }

// Callback hell
// httpGetAsync('https://picsum.photos/200/300', data => {
//   console.log(data);
//   document.getElementById('img_1').setAttribute('src', data.responseURL);

//   httpGetAsync('https://picsum.photos/200/300', data => {
//     console.log(data);
//     document.getElementById('img_2').setAttribute('src', data.responseURL);

//     httpGetAsync('https://picsum.photos/200/300', data => {
//       console.log(data);
//       document.getElementById('img_3').setAttribute('src', data.responseURL);
//     });
//   });
// });

// PROMISE
// const currentPromise = new Promise((resolve, reject) => {
//   let condition = false;

//   if (condition) {
//     // request API
//     setTimeout(() => {
//       resolve('Success');
//     }, 3000);
//   } else {
//     reject('Error');
//   }
// });

function httpGetAsync(theUrl, resolve, reject) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) resolve(xmlHttp);
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/200/300', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/200/300', resolve);
});

const promise3 = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/200/300', resolve);
});

// Async Await
const executeAsync = async () => {
  try {
    const response = await currentPromise;
    document.getElementById('img_1').setAttribute('src', response.responseURL);
    const response2 = await promise2;
    document.getElementById('img_2').setAttribute('src', response2.responseURL);
    const response3 = await promise3;
    document.getElementById('img_3').setAttribute('src', response3.responseURL);
  } catch (err) {
    console.log({ err });
  }
};

executeAsync();

// Xử lý callback hell bằng Promise
// chaining
// currentPromise
//   .then(data => {
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src', data.responseURL);
//     return promise2;
//   })
//   .then(data => {
//     document.getElementById('img_2').setAttribute('src', data.responseURL);
//     return promise3;
//   })
//   .then(data => {
//     document.getElementById('img_3').setAttribute('src', data.responseURL);
//   })
//   .catch(err => {
//     console.log(err);
//   });
