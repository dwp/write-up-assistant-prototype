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

  return res.redirect('/iteration2/notes-entry-choice')
})

// Save and exit — update status and return to case list
router.get('/save-and-exit-consultation', function (req, res) {
  req.session.data['caseStatus'] = "Started";
  res.redirect('/iteration2/select-case');
})


// =========================================================
// Crisp list route — handles "Save" and "Copy and return"
// =========================================================
router.post('/save-crisplist', function (req, res) {
  // Save crisp list to session
  req.session.data['crisplist'] = req.body.freeFormNotes

  const action = req.body.action
  const returnUrl = req.body.returnUrl || req.headers.referer || '/'

  // Save → stay on same page
  if (action === 'save') {
    return res.redirect(req.headers.referer || returnUrl)
  }

  // Copy and return → go back after copying
  if (action === 'copy-return') {
    return res.redirect(returnUrl)
  }

  // Default fallback
  res.redirect(returnUrl)
})

module.exports = router