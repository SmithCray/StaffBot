//Create subclass
const Employee = require("./Employee");
//How to extend from parent class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
//Create properties & methods
module.exports = Intern;
