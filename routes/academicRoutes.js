const express = require ( "express" );
const router = express.Router();

const { createAcademicYear, updateAcademicYear , GetAcademicDetails } = require("../controllers/AcademicYearController");

router.post( "/academic-year", createAcademicYear);
router.put("/academic-year/:id", updateAcademicYear);
router.get("/academic-year/details", GetAcademicDetails);
module.exports = router;










