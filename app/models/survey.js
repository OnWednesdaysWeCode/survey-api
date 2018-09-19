const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
