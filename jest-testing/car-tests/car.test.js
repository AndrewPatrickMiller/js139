let Car = require('./car.js');

describe('Tests for the Car Class', () => {
  let car = new Car();
  let carsArray = [new Car(), new Car(), new Car()]
  
  beforeEach(() => {
    car = new Car();
    carsArray = [new Car(), new Car(), new Car()]
  });
   
  test('Has four wheels?', () => {
    expect(car.wheels).toBe(4)
  });
  
  test("Doesn't have three wheels", () => {
    expect(car.wheels).not.toBe(3);
  });
  
  test("Same array in memory", () => {
    expect(carsArray).toBe(carsArray);
    expect(carsArray).not.toBe([new Car(), new Car(), new Car()]);
  });
  
  test("Same array property keys and values.", () => {
    expect(carsArray).toEqual([new Car(), new Car(), new Car()]);
  }
  );
});
