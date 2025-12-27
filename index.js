const express= require('express');
require('dotenv').config();

const connectDb= require("./config/connectDb.js");
const userRoutes = require("./routes/userRoutes")
const academicRoutes = require("./routes/academicRoutes")
const courseRoutes = require("./routes/courseRoutes")
const subjectRoutes = require("./routes/subjectRoutes")
const LoginUser = require("./routes/loginRoutes");
const app = express()
app.use(express.json())
connectDb()
                                        
app.use("/api",userRoutes)
app.use("/api/course",courseRoutes)
app.use("/api",academicRoutes)  
app.use("/api/subject", subjectRoutes);
app.use("/api", LoginUser);
app.listen(3000,() => {
    console.log('Server started on port 3000');
})

