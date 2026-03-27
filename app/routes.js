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





// GET – Add new condition OR View/Edit existing condition
router.get('/iteration2/new-condition', function (req, res) {

  const index = req.query.id;

  // Edit mode
  if (
    index !== undefined &&
    index !== "" &&
    req.session.data.addedConditions &&
    req.session.data.addedConditions[index]
  ) {
    const condition = req.session.data.addedConditions[index];

    return res.render('iteration2/new-condition', {
      condition: condition,
      conditionIndex: index
    });
  }

  // Add mode (blank)
  res.render('iteration2/new-condition', {
    condition: {},
    conditionIndex: null
  });
});


// POST – Add OR Edit a condition
router.post('/iteration2/new-condition', function (req, res) {

  const conditions = req.session.data.addedConditions || [];
  const index = req.body['conditionIndex'];

  const newCondition = {
    name: req.body['condition-name'],
    start: req.body['condition-start'],
    diagnosis: req.body['condition-diagnosis'],
    treatments: req.body['condition-treatments'],
    therapies: req.body['condition-home-therapies'],
    risk: req.body['condition-risk']
  };

  // Edit
  if (index !== undefined && index !== "" && conditions[index]) {
    conditions[index] = newCondition;
  }

  // Add
  else {
    conditions.push(newCondition);
  }

  req.session.data.addedConditions = conditions;

  res.redirect('/iteration2/dashboard-notes.html#addConditions-conditionHistory');
});


// REMOVE condition
router.get('/iteration2/remove-condition', function (req, res) {

  const index = Number(req.query.id);

  if (
    !isNaN(index) &&
    req.session.data.addedConditions &&
    req.session.data.addedConditions[index]
  ) {
    req.session.data.addedConditions.splice(index, 1);
  }

  res.redirect('/iteration2/dashboard-notes.html#addConditions-conditionHistory');
});






// GET – Add new medication OR View/Edit medication
router.get('/iteration2/new-medication', function (req, res) {

  const index = req.query.id;

  // Edit mode
  if (
    index !== undefined &&
    index !== "" &&
    req.session.data.addedMedications &&
    req.session.data.addedMedications[index]
  ) {
    const medication = req.session.data.addedMedications[index];

    return res.render('iteration2/new-medication', {
      medication: medication,
      medicationIndex: index
    });
  }

  // Add mode (blank)
  res.render('iteration2/new-medication', {
    medication: {},
    medicationIndex: null
  });
});


// POST – Add or Edit medication
router.post('/iteration2/new-medication', function (req, res) {

  const medications = req.session.data.addedMedications || [];
  const index = req.body['medicationIndex'];

  const newMedication = {
    name: req.body['medication-name'],
    dosage: req.body['medication-dosage'],
    frequency: req.body['medication-frequency'],
    reason: req.body['medication-reason'],
    effectiveness: req.body['medication-effectiveness'],
    sideeffects: req.body['medication-sideeffects']
  };

  // Edit mode
  if (index !== undefined && index !== "" && medications[index]) {
    medications[index] = newMedication;
  }

  // Add mode
  else {
    medications.push(newMedication);
  }

  req.session.data.addedMedications = medications;

  res.redirect('/iteration2/dashboard-notes.html#add-medicationTab');
});


// REMOVE medication
router.get('/iteration2/remove-medication', function (req, res) {

  const index = Number(req.query.id);

  if (
    !isNaN(index) &&
    req.session.data.addedMedications &&
    req.session.data.addedMedications[index]
  ) {
    req.session.data.addedMedications.splice(index, 1);
  }

  res.redirect('/iteration2/dashboard-notes.html#add-medicationTab');
});

module.exports = router;
