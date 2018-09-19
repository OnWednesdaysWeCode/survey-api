const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  response: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
