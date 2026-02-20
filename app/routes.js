//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/set-variable', function(req, res) {
  req.session.data['myVariable'] = "A dynamic value";
  res.redirect('/');
});

