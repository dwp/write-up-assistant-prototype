//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ---------- Example route ----------
router.post('/set-variable', function (req, res) {
  req.session.data['myVariable'] = 'A dynamic value'
  res.redirect('/')
})

// ---------- Iteration 2 routes ----------
router.post('/iteration2/notes-entry-choice', function (req, res) {
  const choice = req.session.data['notes-entry-method']

  if (choice === 'structured') {
    return res.redirect('/iteration2/add-notes')
  }

  if (choice === 'freeform') {
    return res.redirect('/iteration2/consultation-notes-freeform')
  }

  // If nothing selected, reload the page (or add an error on the page)
  return res.redirect('/iteration2/notes-entry-choice')
})

// Save and exit — update status and return to case list
router.get('/save-and-exit-consultation', function (req, res) {
  req.session.data['caseStatus'] = "Started";
  res.redirect('/iteration2/select-case');
});





module.exports = router