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

// delay('Hello 👋🏻', 1000)
//   .then((data) => {
//     console.log(data);
//     return delay('How are you?', 1000);
//   })
//   .then((data) => {
//     console.log(data);
//     return delay("I hope you're having a good morning", 1000);
//   })
//   .then((data) => {
//     console.log(data);
//     return delay("I hope you're having a good afternoon", 1000);
//   })
//   .then((data) => {
//     console.log(data);
//     return delay("I hope you're having a good evening", 1000);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function delayMessages() {
//   try {
//   const dataArr = [
//     ['Hello 👋🏻', 0],
//     ['How are you?', 1000],
//     ["I hope you're having a good morning", 1000],
//     ["I hope you're having a good afternoon", 1000],
//     ["I hope you're having a good evening", 1000],
//   ];
//   try {
//     for (let i = 0; i < dataArr.length; i++) {
//       const message = await delay(dataArr[i][0], dataArr[i][1]);
//       console.log(message);
//     }
//   } catch (err) { console.log(err); }

  let message = await delay('Hello 👋🏻', 0);
  console.log(message);
  message = await delay('How are you?', 1000);
  console.log(message);
  message = await delay("I hope you're having a good morning", 1000);
  console.log(message);
  message = await delay("I hope you're having a good afternoon", 1000);
  console.log(message);
  message = await delay("I hope you're having a good evening", 1000);
  console.log(message);
//   } catch (err) {
//     console.log(err);
//   }
}

// Higher Order Function
function makeSafe(fn, errorHandler = (err) => console.log(err)) {
  return fn().catch(errorHandler);
}

makeSafe(delayMessages);
makeSafe(delayMessages);
makeSafe(delayMessages);
makeSafe(delayMessages);

// delayMessages().catch((err) => console.log(err));
// delayMessages().catch((err) => console.log(err));
// delayMessages().catch((err) => console.log(err));
// delayMessages().catch((err) => console.log(err));
