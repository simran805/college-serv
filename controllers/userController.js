const User = require("../models/user")

const createUser= async(req,res) => {
    const{ name } = req.body 

const user = await User.create({
    name: name 
  })

    res.status(200).json( {
        success:true,
        msg:"user create succesfully"
    })
}

module.exports = {createUser}


