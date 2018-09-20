const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
// references the responder, not the creat
  responder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  answer: {
    type: String,
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', responseSchema)
