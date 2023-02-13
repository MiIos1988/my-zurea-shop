const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String
    }
})

const UserModel = Mongoose.model("user", userSchema);

module.exports = UserModel