//Create subclass
const Employee = require("./Employee");
//How to extend from parent class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
//Create properties & methods
module.exports = Manager;
