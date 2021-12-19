const Employee = require('./Employee')

class Enginneer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  };

  getGithub() {
    return this.github
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Enginneer