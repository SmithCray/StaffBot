//Create subclass
const Employee = require("./Employee");
//How to extend from parent class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
//Create properties & methods
module.exports - Engineer;
