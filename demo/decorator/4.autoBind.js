import { autobind } from 'core-decorators'; // a NPM lib

class Person {
  @autobind
  getPerson() {
    return this;
  }
}

let person = new Person();
let getPerson = person.getPerson;

getPerson() === person; // true