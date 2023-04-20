const mongoose = require('mongoose')

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hobbies: [String],
  horsesRidden: {
    type: Number,
    default: 0,
  },
})

const User = mongoose.model('User', userSchema)

module.exports = User
