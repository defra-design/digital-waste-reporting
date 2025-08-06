//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here



// Private Beta V1 routes //

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/defra-id/sign-in-answer'
router.post('/layouts/Private-beta/Onboarding/V1/defra-id/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['one-or-gov-gateway']

  // Check whether the variable matches
  if (oneorgovgateway == "Sign in with One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/oneLogin/start')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/gov-gateway/start')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/oneLogin/start-answer'
router.post('/layouts/Private-beta/Onboarding/V1/oneLogin/start-answer', function (req, res) {

  // Make a variable and give it the value
  var createorsignin = req.session.data['create-or-sign-in']

  // Check whether the variable matches
  if (createorsignin == "Create a GOV.UK One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/oneLogin/create-acccount')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/oneLogin/email-address')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/defra-id/verify-single-number-answer'
router.post('/layouts/Private-beta/Onboarding/V1/defra-id/verify-single-number-answer', function (req, res) {

  // Make a variable and give it the value
  var verifyidentity = req.session.data['verify-your-identity']

  // Check whether the variable matches
  if (verifyidentity == "Text message"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/defra-id/verify-text')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/defra-id/verify-email')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/what-activity-answer'
router.post('/layouts/Private-beta/Onboarding/V1/what-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var whatactivity = req.session.data['what-activity']

  // Check whether the variable matches
  if (whatactivity == "Pay my annual service charge"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/payment/why-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/site-details/postcode')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/payment/why-service-charge-answer'
router.post('/layouts/Private-beta/Onboarding/V1/payment/why-service-charge-answer', function (req, res) {

  // Make a variable and give it the value
  var paycharge = req.session.data['pay-charge']

  // Check whether the variable matches
  if (paycharge == "Pay service charge"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/payment/pay-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/waste-account-not-paid')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/api-info-answer'
router.post('/layouts/Private-beta/Onboarding/V1/api-info-answer', function (req, res) {

  // Make a variable and give it the value
  var apicredentials = req.session.data['api-credentials']

  // Check whether the variable matches
  if (apicredentials == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/api-details-yes')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/waste-account-2-sites-paid')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/check-site-details-answer'
router.post('/layouts/Private-beta/Onboarding/V1/check-site-details-answer', function (req, res) {

  // Make a variable and give it the value
  var addanothersite = req.session.data['add-another-site']

  // Check whether the variable matches
  if (addanothersite == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/site-details/address-details-2')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/waste-account-1-site-paid')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V1/check-site-details-additional-site-answer'
router.post('/layouts/Private-beta/Onboarding/V1/check-site-details-additional-site-answer', function (req, res) {

  // Make a variable and give it the value
  var addanothersite2 = req.session.data['add-another-site-2']

  // Check whether the variable matches
  if (addanothersite2 == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V1/site-details/address-details-3')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V1/waste-account-2-sites-paid')
  }

})