const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema ({
    subjectName: { type: String, required: true },
    course: { type: String , required: true },
    semester: { type: Number, required: false },
    examBase : { type: String, enum: ['semester', 'annual'], required: true } 
});

module.exports = mongoose.model('AcademicSubject' , SubjectSchema);
