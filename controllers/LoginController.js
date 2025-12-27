const Login = require('../models/LoginSchema');


// controller to handle user signup
const signupUser = async( req, res ) => {
    const { email, mobile, password } = req.body;

    try{
        const existing = await Login.findOne({ 
            $or: [
                email ? { email } : null,
                mobile ? { mobile } : null
            ].filter(Boolan)
         });
         if(existing) 
            return res.status(400).json({ message: "user already exists" });

         const user = await Login.create({ email,mobile,password });
         res.status(200).json({ message: "signup successful", user});
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};


// Controller to handle user login
const LoginUser = async (req,res) => {
    try{
       const { identifier, password } = req.body;

       let user;
       if(identifier.includes('@')) {
        user = await Login.findOne({ email: identifier });
       } else{
        user = await Login.findOne({ mobile: identifier });
       }
       
       if(!user) 
return res.status(404).json({ message: 'User not found '});

       if(user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
       }

         return res.status(200).json({ message: 'Login successful' , user});
    } catch(error) {
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {  signupUser, LoginUser };