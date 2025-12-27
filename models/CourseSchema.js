const mongoose = require('mongoose');
 
const CourseSchema  = new mongoose.Schema ( {
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true },
    courseDuration: { type: Number, required: true },
    examBase : { type: String, enum: ['semester', 'annual'], required: true },
    courseyear: { type: Number, required: false}, 
    status: { type: String, enum: ['active', 'inactive'], default: 'active' , required: false},
});

module.exports =  mongoose.model('AcademicCourse', CourseSchema)


