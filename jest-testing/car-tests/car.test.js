const Car = require("./car.js");


describe('Car class', () => {
  test('has four wheels', () => {
    let myCar = new Car();
    expect(myCar.wheels).toBe(4);
  });
  test('bad wheels', () => {
    let myCar = new Car();
    expect(myCar.wheels).toBe(3);
    
  });
});

