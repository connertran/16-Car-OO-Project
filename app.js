// all types of vehicles
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    const { make, model, year } = this
    return `The vehicle is a ${make} ${model}, ${year}`
  }
}

// 4 wheels vehicles
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}
// class for motorcycles
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() { return 'VROOM!!!' };
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(newVehicle) {
    if (this.capacity === 0) {
      return "Sorry, we're full.";
    }
    // to check if the variable belong to the same class
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    this.vehicles.push(newVehicle);
    this.capacity--;
    console.log('Vehicle added')
  }
}