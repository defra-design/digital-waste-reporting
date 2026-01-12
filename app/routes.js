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


// Private Beta V2 routes //

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/defra-id/sign-in-answer'
router.post('/layouts/Private-beta/Onboarding/V2/defra-id/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var signin = req.session.data['signIn']

  // Check whether the variable matches
  if (signin == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/oneLogin/sign-in')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/gov-gateway/start')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/defra-id/related-org-address-answer'
router.post('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-address-answer', function (req, res) {

  // Make a variable and give it the value
  var relatedorgaddress = req.session.data['relatedCompanySameAddress']

  // Check whether the variable matches
  if (relatedorgaddress == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-contact-details')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-postcode')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/defra-id/related-org-contact-details-answer'
router.post('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-contact-details-answer', function (req, res) {

  // Make a variable and give it the value
  var relatedorgcontact = req.session.data['relatedCompanySameContact']

  // Check whether the variable matches
  if (relatedorgcontact == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-check-details')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/related-org-new-contact-details')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/what-activity-answer'
router.post('/layouts/Private-beta/Onboarding/V2/what-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var whatactivity = req.session.data['what-activity']

  // Check whether the variable matches
  if (whatactivity == "Yes to my defra account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/id-account')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/service-charge')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/service-charge-answer'
router.post('/layouts/Private-beta/Onboarding/V2/service-charge-answer', function (req, res) {

  // Make a variable and give it the value
  var servicecharge = req.session.data['service-charge']

  // Check whether the variable matches
  if (servicecharge == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/why-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/waste-account')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/site-details/check-site-details-answer'
router.post('/layouts/Private-beta/Onboarding/V2/site-details/check-site-details-answer', function (req, res) {

  // Make a variable and give it the value
  var addanothersite = req.session.data['add-another-site']

  // Check whether the variable matches
  if (addanothersite == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/site-details/site-name-2')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/service-charge')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/J2/what-activity-answer'
router.post('/layouts/Private-beta/Onboarding/V2/J2/what-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var whatactivity = req.session.data['what-activity']

  // Check whether the variable matches
  if (whatactivity == "Yes to my defra account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/defra-id/id-account-2-accounts-+-service')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/J2/service-charge')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V2/J2/service-charge-answer'
router.post('/layouts/Private-beta/Onboarding/V2/J2/service-charge-answer', function (req, res) {

  // Make a variable and give it the value
  var servicecharge = req.session.data['service-charge']

  // Check whether the variable matches
  if (servicecharge == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V2/J2/why-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V2/waste-account-2-+-service')
  }

})


// Private Beta V3 routes //

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/defra-id/sign-in-answer'
router.post('/layouts/Private-beta/Onboarding/V3/defra-id/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var signin = req.session.data['signIn']

  // Check whether the variable matches
  if (signin == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/oneLogin/sign-in')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/gov-gateway/start')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/defra-id/account-type-answer'
router.post('/layouts/Private-beta/Onboarding/V3/defra-id/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/defra-id/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/defra-id/uk-org-answer'
router.post('/layouts/Private-beta/Onboarding/V3/defra-id/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/defra-id/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/defra-id/companies-house-answer'
router.post('/layouts/Private-beta/Onboarding/V3/defra-id/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes Companies House number"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/defra-id/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/defra-id/sole-trader-or-charity')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/legal-entities-answer'
router.post('/layouts/Private-beta/Onboarding/V3/legal-entities-answer', function (req, res) {

  // Make a variable and give it the value
  var legalentities = req.session.data['legalentities']

  // Check whether the variable matches
  if (legalentities == "Yes add another"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/defra-id/id-account')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/waste-account-1')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/waste-account-answer'
router.post('/layouts/Private-beta/Onboarding/V3/waste-account-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Pay service charge"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/why-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes Companies House number"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/sole-trader-or-charity')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/legal-entities-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/legal-entities-answer', function (req, res) {

  // Make a variable and give it the value
  var legalentities = req.session.data['legalentities']

  // Check whether the variable matches
  if (legalentities == "Yes add another"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/waste-account-1')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3//J2/defra-id/postcode')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var registrationAccountType = req.session.data['registrationAccountType']

  // Check whether the variable matches
  if (registrationAccountType == "Yes create an account"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2defra-id/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2defra-id/business-name')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes Companies House number"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/sole-trader-or-charity')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/J2/legal-entities-1-answer'
router.post('/layouts/Private-beta/Onboarding/V3/J2/legal-entities-1-answer', function (req, res) {

  // Make a variable and give it the value
  var legalentities = req.session.data['legalentities']

  // Check whether the variable matches
  if (legalentities == "Yes add another"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type-1')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/waste-account-2')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Onboarding/V3/waste-account-2-answer'
router.post('/layouts/Private-beta/Onboarding/V3/waste-account-2-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Pay service charge"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/why-service-charge')
  } else {
    res.redirect('/layouts/Private-beta/Onboarding/V3/J2/defra-id/account-type')
  }

})

// Web form V1 – Idea A //

// J1 //

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-A/J1/man-what-format-answer'
router.post('/layouts/Private-beta/Web-form/Idea-A/J1/man-what-format-answer', function (req, res) {

  // Make a variable and give it the value
  var format = req.session.data['format']

  // Check whether the variable matches
  if (format == "Spreadsheet"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J1/no-design-yet')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J1/waste-activities')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-A/J1/previous-movement-answer'
router.post('/layouts/Private-beta/Web-form/Idea-A/J1/previous-movement-answer', function (req, res) {

  // Make a variable and give it the value
  var previousWaste = req.session.data['previousWaste']

  // Check whether the variable matches
  if (previousWaste == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J1/same-waste')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J1/different-waste')
  }

})


// Web form V1 – Idea A //

// J2 //

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-A/J2/manage-business-movements-answer'
router.post('/layouts/Private-beta/Web-form/Idea-A/J2/manage-business-movements-answer', function (req, res) {

  // Make a variable and give it the value
  var manageMovements = req.session.data['manageMovements']

  // Check whether the variable matches
  if (manageMovements == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J2/how-to-send-waste-movements')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-A/J2/your-waste-movements')
  }

})




// Web form V1 – Idea B //

// J1 //


// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J1/save-template-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J1/save-template-answer', function (req, res) {

  // Make a variable and give it the value
  var saveTemplate = req.session.data['saveTemplate']

  // Check whether the variable matches
  if (saveTemplate == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J1/your-templates-1')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J1/your-waste-movements')
  }

})


// J2 //


// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J2/manage-template-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J2/manage-template-answer', function (req, res) {

  // Make a variable and give it the value
  var manageTemplate = req.session.data['manageTemplate']

  // Check whether the variable matches
  if (manageTemplate == "Use to send waste movement"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/use-for-same-waste')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/edit-template')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J2/save-template-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J2/save-template-answer', function (req, res) {

  // Make a variable and give it the value
  var saveTemplate = req.session.data['saveTemplate']

  // Check whether the variable matches
  if (saveTemplate == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/your-templates-2')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/your-waste-movements-2')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J2/save-template-2-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J2/save-template-2-answer', function (req, res) {

  // Make a variable and give it the value
  var saveTemplate = req.session.data['saveTemplate']

  // Check whether the variable matches
  if (saveTemplate == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/your-templates-3')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J2/your-waste-movements-3')
  }

})


// J3 //


// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J3/previous-movement-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J3/previous-movement-answer', function (req, res) {

  // Make a variable and give it the value
  var previousWaste = req.session.data['previousWaste']

  // Check whether the variable matches
  if (previousWaste == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J3/same-waste')
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J3/different-waste')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Web-form/Idea-B/J3/save-template-2-answer'
router.post('/layouts/Private-beta/Web-form/Idea-B/J3/save-template-2-answer', function (req, res) {

  // Make a variable and give it the value
  var saveTemplate = req.session.data['saveTemplate']

  // Check whether the variable matches
  if (saveTemplate == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J3/your-templates-3')
    
  } else {
    res.redirect('/layouts/Private-beta/Web-form/Idea-B/J3/your-waste-movements-3')
  }

})


// Send waste movements V1 //


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/API/send-waste-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/API/send-waste-answer', function (req, res) {

  // Make a variable and give it the value
  var sendWaste = req.session.data['sendWaste']
  
  // Check whether the variable matches

  if (sendWaste == "Automatically"){
   
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/API/API-terms')

  } else if (sendWaste == "Manually"){
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/POPs')
    
  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/both')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/API/view-your-API-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/API/view-your-API-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Delete"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/Waste-movements/V1/API/delete-API-code')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/Spreadsheet/next-activity-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var Nextactivity = req.session.data['Next activity']
  
  // Check whether the variable matches

  if (Nextactivity == "Upload spreadsheet"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/spreadsheet-upload')

  } else if (Nextactivity == "Download spreadsheet template"){
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/spreadsheet-download')

  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/send-waste')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/Both/next-activity-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/Both/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var APIorSpreadsheet = req.session.data['API or Spreadsheet']
  
  // Check whether the variable matches

  if (APIorSpreadsheet == "View my API details"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/API-terms')

  } else if (APIorSpreadsheet == "Upload spreadsheet"){
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/spreadsheet-upload')

  } else if (APIorSpreadsheet == "Download spreadsheet template"){
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/spreadsheet-download')

  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/send-waste')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/change-format/send-waste-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/change-format/send-waste-answer', function (req, res) {

  // Make a variable and give it the value
  var sendWaste2 = req.session.data['sendWaste2']
  
  // Check whether the variable matches

  if (sendWaste2 == "Api"){
   
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/change-format/API-terms')

  } else if (sendWaste == "Manually"){
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Spreadsheet/POPs')
    
  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/Both/both')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/API/next-activity-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/API/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var Nextactivity = req.session.data['Next activity']
  
  // Check whether the variable matches

  if (Nextactivity == "View my API details"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/API/view-your-API')

  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/API/send-waste')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/Waste-movements/V1/API/delete-API-code-answer'
router.post('/layouts/Private-beta/Waste-movements/V1/API/delete-API-code-answer', function (req, res) {

  // Make a variable and give it the value
  var Apidelete = req.session.data['Apidelete']
  
  // Check whether the variable matches

  if (Apidelete == "Yes"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/Waste-movements/V1/API/API-deleted')

  } else {
    
    res.redirect('/layouts/Private-beta/Waste-movements/V1/API/view-your-API')
  }

})


// MVP – Registration V1 routes //


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/permit-uk-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/permit-uk-answer', function (req, res) {

  // Make a variable and give it the value
  var UKpermit = req.session.data['UK permit']

  // Check whether the variable matches
  if (UKpermit == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/not-a-waste-receiver')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/govgateway-sign-in')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/account-type-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var BusinessorOrganisation = req.session.data['Business or organisation']

  // Check whether the variable matches
  if (BusinessorOrganisation == "Business"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/uk-org-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var tradeuk = req.session.data['trade-uk']

  // Check whether the variable matches
  if (tradeuk == "Limited company"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/no-design-yet')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/companies-house-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/next-activity'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/1-org-service-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/account-type')
  }

})



// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/account-type-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var BusinessorOrganisation2 = req.session.data['Business or organisation 2']

  // Check whether the variable matches
  if (BusinessorOrganisation2 == "Business"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/no-design-yet')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/uk-org-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var tradeuk2 = req.session.data['trade-uk-2']

  // Check whether the variable matches
  if (tradeuk2 == "Limited company"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/no-design-yet')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/companies-house-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse2 = req.session.data['companiesHouse2']

  // Check whether the variable matches
  if (companiesHouse2 == "Yes"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/next-activity'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/account-type')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/next-activity-wr1-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/next-activity-wr1-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/2-orgs-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/account-type')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/next-activity')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/next-activity')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR2/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR2/spreadsheet-upload')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S1/WR1/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S1/WR1/spreadsheet-upload')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/permit-uk-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/permit-uk-answer', function (req, res) {

  // Make a variable and give it the value
  var UKpermit = req.session.data['UK permit']

  // Check whether the variable matches
  if (UKpermit == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2//sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/not-a-waste-receiver')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/govgateway-sign-in')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1//next-activity')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/next-activity-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/spreadsheet-update')

  } else if (nextActivity == "Choose another waste receiver in my account"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/account-type')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/next-activity-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/account-type')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/account-type')
  }

})



// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/spreadsheet-upload')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/upload-spreadsheet-error')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/next-activity')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/upload-spreadsheet-error')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/account-type')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR2/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/spreadsheet-upload')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR1/Email/govgateway-sign-in')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S2/WR2/Email/govgateway-sign-in')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR1/permit-uk-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/permit-uk-answer', function (req, res) {

  // Make a variable and give it the value
  var UKpermit = req.session.data['UK permit']

  // Check whether the variable matches
  if (UKpermit == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/not-a-waste-receiver')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/govgateway-sign-in')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/next-activity')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/next-activity')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR1/next-activity-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/account-type')
  }

})



// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR1/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/spreadsheet-upload')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR2/next-activity-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/next-activity-answer', function (req, res) {

  // Make a variable and give it the value
  var nextActivity = req.session.data['Next activity']

  // Check whether the variable matches
  if (nextActivity == "Connect your software"){
  
  // Send user to
  res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/view-your-API')

  } else if (nextActivity == "Upload spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/spreadsheet-upload')

  } else if (nextActivity == "Update spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/spreadsheet-update')

  } else if (nextActivity == "Change to a new WR"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/2-orgs-services-added')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/account-type')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR1/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR1/spreadsheet-upload')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V1/S3/WR2/confirm-spreadsheet-answer'
router.post('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/confirm-spreadsheet-answer', function (req, res) {

  // Make a variable and give it the value
  var anotherfile = req.session.data['another-file']

  // Check whether the variable matches
  if (anotherfile == "Yes, add this file"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/upload-spreadsheet')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V1/S3/WR2/spreadsheet-upload')
  }

})
