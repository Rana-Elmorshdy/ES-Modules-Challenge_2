class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  login() {
    console.log(`Welcome ${this.firstname} ${this.lastname}`);
  }

  logout() {
    console.log(`Bye bye ${this.firstname} ${this.lastname}`);
  }
}

const emplyee1 = new Person("mohamed", "ahmed");
const emplyee2 = new Person("ahmed", "fathy");
