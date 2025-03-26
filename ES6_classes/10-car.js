export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newbrand) {
    if (typeof newbrand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = newbrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newmotor) {
    if (typeof newmotor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = newmotor;
  }

  get color() {
    return this._color;
  }

  set color(newcolor) {
    if (typeof newcolor !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = newcolor;
  }

  cloneCar() {
    const clonedCar = Object.create(Object.getPrototypeOf(this));
    clonedCar._brand = undefined;
    clonedCar._motor = undefined;
    clonedCar._color = undefined;
    return clonedCar;
  }
}
