const AcademicSubject = require('../models/SubjectSchema');

const createSubject = async (req,res) => {
  try{
    const subject = await AcademicSubject.create(req.body);
    return res.status(200).json( { success: true, data: subject, message: "subject created successfully" });
  } catch (error) {
    if(!subject) {
        return res.status(404).json({ success: false, msg: "Subject not found" })
    }
    return res.status(500).json({ success: false, error: error.message, message: "subject creation failed" });
  }
};
const updateSubject = async (req, res) => {
  try {
    const updateData = await AcademicSubject.findByIdAndUpdate(
      req.params.subjectName, req.params.semester, req.body, {new: true , runValidators: false}
    )
    res.status(200).json({ success: true, data: updateData, message: "Subject updated successfully" });
  } catch (errorr) {
    res.status(500).json({ success: false, error: error.message, message: "Subject updation failed" });
    if(!updateData) {
      return res.status(404).json({ success: false, msg: "Subject not found" })
  }
}
};

module.exports = { createSubject, updateSubject};
