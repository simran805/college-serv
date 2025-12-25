const express = require('express');
const router = express.Router();

const { createCourse, updateCourse, getAllCourses} = require('../controllers/CourseController');
// const courseRoutes = require("./routes/courseRoutes")

// app.use('/api',courseRoutes);
router.post('/create', createCourse);
router.put('/update/:id', updateCourse);
router.get('/all', getAllCourses);

module.exports = router;