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

