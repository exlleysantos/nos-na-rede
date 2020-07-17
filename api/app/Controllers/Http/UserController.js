'use strict'

const User = use("App/Models/User");

class UserController {
    async create ({ request }) {
        const data = request.only(["username", "email", "password", "cpf", "avatar"]);
        
        return await User.create(data);
      }
}

module.exports = UserController
