const AcademicYear= require("../models/AcademicSchema");

const createAcademicYear = async (req, res) => {
    const {Year,startYear,endYear,status="active"} = req.body;


const  academicYear = await AcademicYear.create(
     { Year: Year, startYear:startYear, endYear:endYear, status:status}
    )

    res.status(200).json({
        success: true,
        msg: "Academic details created succesfully",
    });
}

const updateAcademicYear = async (req,res) => {
    try {
        const{ id } = req.params
        const {Year, startYear, endYear , status} = req.body;

        const requiredFields = { Year, startYear, endYear, status };

      const updateData = await AcademicYear.findByIdAndUpdate(
        id,
        { Year: Year, startYear: startYear, endYear: endYear, status: status },
        { new: true }
      );
        console.log("update data", updateData);

    if(!updateData) {
            return res.status(404).json({ success: false, msg: "Academic year not found" })
         }
        return res.status(200).json({ success: true, msg: "Update successfully", data: updateData });
    } catch ( error ) {
        console.log("UPDATE ERROR" , error ) 
        return res.status(500).json({ success: false, msg: "Error found in updating academic year", error: error.message });
    }
}

const GetAcademicDetails = async (req,res) => {
    try {
        const { Year , status } = req.query;
         let filter = {};
         if(Year) filter.Year = Year;
         if(status) filter.status = status;

        const data = await AcademicYear.find(filter);

      return res.status(200).json(data) ;
    } catch (error) {
       return res.status(500).json( {
            message: error.message
        });
    }
}

module.exports = {createAcademicYear , updateAcademicYear , GetAcademicDetails };