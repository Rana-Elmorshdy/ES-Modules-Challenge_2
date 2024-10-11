/* eslint-disable */
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  //   this.login = function () {
  //     console.log(`Welcome ${this.firstname} ${this.lastname}`);
  //   };
}

Person.prototype.login = () => {
  console.log("login", this);
  console.log(`Welcome ${this.firstname} ${this.lastname}`);
};

Person.prototype.logout = function () {
  console.log("logout", this);
  this.login();
  console.log(`Bye bye ${this.firstname} ${this.lastname}`);
};

const emplyee1 = new Person("mohamed", "ahmed");
const emplyee2 = new Person("ahmed", "fathy");

// console.log(emplyee1.__proto__);
// console.log(emplyee2.login());
console.log(emplyee2.logout());
// console.log(emplyee1.login == emplyee2.login);

/* new Operator */
// Create new empty object
// set the prototype
// call the function with given arguments & Bind this to the new object
// return object
