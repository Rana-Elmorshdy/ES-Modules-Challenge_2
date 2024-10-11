// function Laptop(brand, model, batteryPercentage = 100) {
//   this.brand = brand;
//   this.model = model;
//   this.batteryPercentage = batteryPercentage;
// }

// Laptop.prototype.useSoftware = function () {
//   if (this.batteryPercentage >= 15) {
//     this.batteryPercentage -= 15;
//     console.log(`Battery after opening app: ${this.batteryPercentage}%`);
//   } else {
//     console.log("Battery is too low to open app");
//   }
// };

// Laptop.prototype.charge = function () {
//   this.batteryPercentage += 25;

//   if (this.batteryPercentage > 100) {
//     this.batteryPercentage = 100;
//   }
//   console.log(`Battery after charging: ${this.batteryPercentage}%`);
// };

class Laptop {
  constructor(brand, model, batteryPercentage = 100) {
    this.brand = brand;
    this.model = model;
    this.batteryPercentage = batteryPercentage;
  }

  useSoftware() {
    if (this.batteryPercentage >= 15) {
      this.batteryPercentage -= 15;
      console.log(`Battery after opening app: ${this.batteryPercentage}%`);
    } else {
      console.log("Battery is too low to open app");
    }
  }

  charge() {
    this.batteryPercentage += 25;

    if (this.batteryPercentage > 100) {
      this.batteryPercentage = 100;
    }
    console.log(`Battery after charging: ${this.batteryPercentage}%`);
  }
}

const laptop1 = new Laptop("mac", "pro");
const laptop2 = new Laptop("dell", "cSpell");
