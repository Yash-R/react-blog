var mongoose = require("mongoose")

var userSchema = mongoose.Schema({
    firstname: {type: String, maxlength: 50},
    lastname: {type:String, maxlength:50},
    email: {type: String, trim: true, unique: 1},
    password: {type: String, minlength: 50},
    role: {type: Number, default: 0},
    token: {type: String},
    tokenExp: {type: Number}
})

var User = mongoose.model("User", userSchema);

module.exports = {User}