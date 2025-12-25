const express = require('express');
const router  = express.Router();

const { createSubject } = require('../controllers/subjectController');

router.post('/create', createSubject);

module.exports = router;