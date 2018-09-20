// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// const mongoose = require('mongoose')

const Survey = require('../models/survey')

// pull in Mongoose model for responses
const Response = require('../models/response')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET all/responses
router.get('/responses', requireToken, (req, res) => {
  Response.find()
    .then(responses => {
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return responses.map(response => response.toObject())
    })
    // respond with status 200 and JSON of the responses
    .then(responses => res.status(200).json({ responses: responses }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// CREATE
// POST /responses
router.post('/responses', requireToken, (req, res) => {
  // set responder of response to be current user
  req.body.response.responder = req.user.id
  // combine two promises -- Survey.findById and Response.create --
  // into one super Promise that returns an array of two promises
  Promise.all([Survey.findById(req.body.response.survey), Response.create(req.body.response)])
    .then(data => {
      // assign first promise to survey variable, second promise to response variable
      let [survey, response] = data
      // push response id to responses field in survey
      survey.responses.push(response.id)
      // save the survey with the new response just pushed
      survey.save()
      // return posted response object as JSON
      res.status(201).json({response: response.toObject()})
    })
    // error handler for both promises
    .catch(err => handle(err, res))
})

module.exports = router
