const mongoose = require("mongoose");

const AcademicSchema=  new mongoose.Schema({
   Year: {
    type: Number,
    required: true
   },
   startYear: {
    type: Number,
    required: true
   },
   endYear: {
    type: Number,
    required: true
   },
   status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
   }
})



module.exports = mongoose.model("AcademicYear", AcademicSchema);