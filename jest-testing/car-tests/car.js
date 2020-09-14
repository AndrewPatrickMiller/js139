class Car {
  constructor() {
    this.wheels = 4;
  }
  removeWheel() {
    this.wheels -= 1;
  }
}

module.exports = Car;