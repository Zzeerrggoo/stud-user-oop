'use strict';

/**Реализуйте класс Student (Студент), который будет наследовать от класса User.
 * Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 * year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 * с помощью которого можно вывести одновременно имя и фамилию студента.
 * Также класс должен иметь метод getCourse(),
 * который будет выводить текущий курс студента (от 1 до 5).
 * Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
 * Текущий год получите самостоятельно*/

class User {

  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  set name(v) {
    this._name = v;
  }

  get name() {
    return this._name;
  }

  set surname(v) {
    this._surname = v;
  }

  get surname() {
    return this._surname;
  }

  getFullName() {
    return `${this._name} ${this._surname}`;
  }

}

class Student extends User {

  constructor(name, surname, year) {
    super(name, surname);

    if (!Student.isSafeYear(year)) {
      throw new RangeError(
          `The year should be in range from ${Student.getCurrentYear() - 5} 
           to ${Student.getCurrentYear()}`);
    }

    this._year = year;
  }

  /**
   * Returns the current year
   * @returns {number}
   */
  static getCurrentYear() {
    return new Date().getFullYear();
  }

  /**
   * Checks if year of entering is valid
   * and not exceeding the range of 5 courses
   * @param   {number} year
   * @returns {boolean}
   */
  static isSafeYear(year) {

    if (typeof year !== 'number' || !Number.isSafeInteger(year) || year < 0) {
      throw new TypeError('The year should be a positive integer');
    }

    const currentYear = Student.getCurrentYear();

    if (currentYear < year) {
      return false;
    }

    return currentYear - year <= 5;

  }

  set year(v) {

    if (!Student.isSafeYear(v)) {
      throw new RangeError(
          `The year should be in range from ${Student.getCurrentYear() - 5} 
           to ${Student.getCurrentYear()}`);
    }

    this._year = v;
  }

  get year() {
    return this._year;
  }

  getCourse() {

    const course = Student.getCurrentYear() - this.year;

    if (course === 0) {
      return 1;
    }

    return course;
  }

}

const stud = new Student('Test', 'Testovich', 2020);
console.log(stud.getCourse());