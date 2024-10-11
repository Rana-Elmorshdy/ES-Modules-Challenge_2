// Callback Hell
// setTimeout(() => {
//   console.log('Hello 👋🏻');
//   setTimeout(() => {
//     console.log('How are you?');
//     setTimeout(() => {
//       console.log("I hope you're having a good day?");
//       setTimeout(() => {
//         console.log("I hope you're having a good day?");
//         setTimeout(() => {
//           console.log("I hope you're having a good day?");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delay = (message, timer) => new Promise((resolve, reject) => {
  if (!message) {
    reject('Empty message is not allowed');
  } else if (timer <= 0) {
    reject('Timer should be a positive number');
  } else {
    setTimeout(() => {
      resolve(message);
    }, timer);
  }
});

console.log('Hi');

delay('Hello 👋🏻', 1000)
  .then((data) => {
    console.log(data);
    return delay('How are you?', 1000);
  })
  .then((data) => {
    console.log(data);
    return delay("I hope you're having a good morning", 1000);
  })
  .then((data) => {
    console.log(data);
    return delay("I hope you're having a good afternoon", 1000);
  })
  .then((data) => {
    console.log(data);
    return delay("I hope you're having a good evening", 1000);
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log('Bye');

// const temp = new Promise((resolve, reject) => {
//   reject("I'm returned from the promise");
// });

// temp.then(() => console.log("I'm resolved"))
//   .catch((err) => console.log(err));