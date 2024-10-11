/* eslint-disable */
console.log('Hi 🤝🏻');

setTimeout(() => console.log('Hello from timeout after 0ms'), 0);

new Promise(function(resolve){
    resolve("Hello from Promise")
}).then(data => console.log(data));

console.log('Bye 👋🏻');
