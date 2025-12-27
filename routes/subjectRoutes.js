const express = require('express');
const router  = express.Router();

const { createSubject, updateSubject } = require('../controllers/SubjectController');

router.post('/create', createSubject);

router.put('/update/:subjectName/:semester', updateSubject);

module.exports = router;