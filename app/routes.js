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

//
// ---------- AI SECTION CHECKLIST LOGIC ----------
//

// 1) Condition history – save state from checkbox
router.post('/iteration2/save-ai-condition-history', function (req, res) {
  // Save "yes" when checked, empty string when unchecked
  req.session.data['ai_ack_condition_history'] = req.body.ai_ack_condition_history || ""

  // Return to list
  return res.redirect('/iteration2/review-ai-report-start')
})

// 2) "Save and return to list" button from item page
router.post('/iteration2/review-ai-report-start', function (req, res) {
  req.session.data['ai_ack_condition_history'] = req.body.ai_ack_condition_history || ""
  return res.redirect('/iteration2/review-ai-report-start')
})

// 3) "Save and continue" to next AI section
router.post('/iteration2/ai-medication', function (req, res) {
  req.session.data['ai_ack_condition_history'] = req.body.ai_ack_condition_history || ""
  return res.redirect('/iteration2/ai-medication')
})

module.exports = router