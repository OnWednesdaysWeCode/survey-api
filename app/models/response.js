const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  answer: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
