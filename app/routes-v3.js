module.exports = function(router) {

// MVP – Registration V3 routes //



// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/sign-in-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/sign-in-answer', function (req, res) {

  // Make a variable and give it the value
  var oneorgovgateway = req.session.data['signIn']

  // Check whether the variable matches
  if (oneorgovgateway == "One Login"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/onelogin-sign-in')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/govgateway-sign-in')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/account-type-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var BusinessorOrganisation = req.session.data['Business or organisation']

  // Check whether the variable matches
  if (BusinessorOrganisation == "Business"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/uk-org-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var tradeuk = req.session.data['trade-uk']

  // Check whether the variable matches
  if (tradeuk == "Limited company"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/companies-house-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/wr1-account')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR1/manage-account-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/manage-account-answer', function (req, res) {

  // Make a variable and give it the value
  var manageAccount = req.session.data['manageAccount']

  // Check whether the variable matches
  if (manageAccount == "Add another organisation"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/add-organisation')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/add-team-member-to-org')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-inter-confirm-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-inter-confirm-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Done"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/intermediary-access-1')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/add-inter-member-1')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-team-confirmation-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-team-confirmation-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Done"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/manage-access-1')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/add-team-member-1')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-team-confirmation-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/added-team-confirmation-answer', function (req, res) {

  // Make a variable and give it the value
  var buttonChoice = req.session.data['buttonChoice']

  // Check whether the variable matches
  if (buttonChoice == "Done"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/manage-access-1')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S1/WR1/add-organisation')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR1/waste-movements-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/waste-movements-answer', function (req, res) {

  // Make a variable and give it the value
  var wasteMovements = req.session.data['wasteMovements']

  // Check whether the variable matches
  if (wasteMovements == "api-code"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/view-your-API')

      } else if (wasteMovements == "download-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/spreadsheet-download')

      } else if (wasteMovements == "upload-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/spreadsheet-upload')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/spreadsheet-update')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR2/account-type-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/account-type-answer', function (req, res) {

  // Make a variable and give it the value
  var BusinessorOrganisation = req.session.data['Business or organisation']

  // Check whether the variable matches
  if (BusinessorOrganisation == "Business"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/uk-org')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR2/uk-org-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/uk-org-answer', function (req, res) {

  // Make a variable and give it the value
  var tradeuk = req.session.data['trade-uk']

  // Check whether the variable matches
  if (tradeuk == "Limited company"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/companies-house')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR2/companies-house-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/companies-house-answer', function (req, res) {

  // Make a variable and give it the value
  var companiesHouse = req.session.data['companiesHouse']

  // Check whether the variable matches
  if (companiesHouse == "Yes"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/companies-house-number')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/no-design-yet')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR1/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/wr1-account')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/wr-account')
  }

})



// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR2/waste-movements-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/waste-movements-answer', function (req, res) {

  // Make a variable and give it the value
  var wasteMovements = req.session.data['wasteMovements']

  // Check whether the variable matches
  if (wasteMovements == "api-code"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/view-your-API')

      } else if (wasteMovements == "download-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/spreadsheet-download')

      } else if (wasteMovements == "upload-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/spreadsheet-upload')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/spreadsheet-update')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S2/WR2/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR1/wr1-account')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S2/WR2/wr2-account')
  }

})


// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S3/WR2/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/wr1-account')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/wr2-account')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S3/WR1/waste-movements-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/waste-movements-answer', function (req, res) {

  // Make a variable and give it the value
  var wasteMovements = req.session.data['wasteMovements']

  // Check whether the variable matches
  if (wasteMovements == "api-code"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/view-your-API')

      } else if (wasteMovements == "download-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/spreadsheet-download')

      } else if (wasteMovements == "upload-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/spreadsheet-upload')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/spreadsheet-update')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S3/WR2/waste-movements-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/waste-movements-answer', function (req, res) {

  // Make a variable and give it the value
  var wasteMovements = req.session.data['wasteMovements']

  // Check whether the variable matches
  if (wasteMovements == "api-code"){
    
  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/view-your-API')

      } else if (wasteMovements == "download-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/spreadsheet-download')

      } else if (wasteMovements == "upload-spreadsheet"){
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/spreadsheet-upload')

  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/spreadsheet-update')
  }

})

// Run this code when a form is submitted to '/layouts/Private-beta/MVP-Registration/V3/S3/WR1/who-2-represent-answer'
router.post('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/who-2-represent-answer', function (req, res) {

  // Make a variable and give it the value
  var who2represent = req.session.data['Who-2-represent']

  // Check whether the variable matches
  if (who2represent == "[Waste receiver name 1]"){

  // Send user to
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR1/wr1-account')
  } else {
    res.redirect('/layouts/Private-beta/MVP-Registration/V3/S3/WR2/wr2-account')
  }

})

}