const AcademicCourse = require("../models/CourseSchema");
    
const createCourse = async (req,res) => {
  try{
    const course = await AcademicCourse.create(req.body);
    return res.status(200).json( { success: true, data: course, message: "course created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message, message: "course creation failed" });
  }
};

const updateCourse = async (req,res) => {
  try {
    const { id } = req.params;
    const {  courseyear, status } = req.body;
    const updatedCourse = await AcademicCourse.findByIdAndUpdate(id, { courseyear, status }, { new: true , runValidators: false });
    return res.status(200).json({ success: true, data: updatedCourse, message: "course updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message, message: "course update failed" });
  }
}

const getAllCourses = async (req,res) => { 
  try {
    const courses = await AcademicCourse.find({});
    return res.status(200).json({ success: true, data: courses , message: "courses fetched succesfully"});
  } catch (error) {
    return res.status(500).json({ success:false, error: error.message, message: "courses fetching failed"});
  }
}
module.exports = { createCourse, updateCourse, getAllCourses };