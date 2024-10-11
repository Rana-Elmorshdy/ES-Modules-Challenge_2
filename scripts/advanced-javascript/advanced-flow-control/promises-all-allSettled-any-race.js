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

// all
// Promise.all([delay('Hello 👋🏻', 100), delay('Bonjour 👋🏻', 100), delay('مرحبا 👋🏻', 100)])
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// any
Promise.any([delay('Hello 👋🏻', 100), delay('Bonjour 👋🏻', 0), delay('مرحبا 👋🏻', 100)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// allSettled
// Promise.allSettled([delay('Hello 👋🏻', 0), delay('Bonjour 👋🏻', 100), delay('مرحبا 👋🏻', 100)])
//   .then((data) => console.log(data));
// race
Promise.race([delay('Hello 👋🏻', 100), delay('Bonjour 👋🏻', 0), delay('مرحبا 👋🏻', 100)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
