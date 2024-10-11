const obj = {
  firstname: "mohamed",
  lastname: "ahmed",
  login() {
    console.log(this);
    console.log(`Welcome ${this.firstname} ${this.lastname}`);
  },
};

// const obj2 = { firstname: "tarek", lastname: "ali" };
const fn = obj.login.bind(obj);
// bind
