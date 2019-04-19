const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = ({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSchema)