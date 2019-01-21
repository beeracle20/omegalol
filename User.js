module.exports = class User {
  constructor(userBody) {
    this.id = Date.now(),
    this.email = userBody.email,
    this.password = userBody.password
  }
}

