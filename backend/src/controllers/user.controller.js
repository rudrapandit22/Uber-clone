const { validationResult } = require("express-validator");
const userModel = require("../models/user.model.js");
const userService = require("../services/user.services.js");
const blacklistTokenModel = require('../models/blacklistToken.model')
const resgisterController = async (req, res) => {
    // Validate incoming request fields
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    // Hash the password before storing
    const hashedPassword = await userModel.hashPassword(password);

    // Create the user via the service layer
    const user = await userService.createUser({
        firstname :fullname.firstname,
        lastname : fullname.lastname,
        email,
        password: hashedPassword,
    });

    // Generate JWT token for the newly created user
    const token = user.generateAuthToken();

    return res.status(201).json({ token, user });
};

const loginController = async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() });

    }
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isMatch = await user.comparePasswords(password);

    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});

    }
    const token = user.generateAuthToken();

    res.cookie('token',token);

    res.status(200).json({token,user});
};

const getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user);
}

const logoutUser =async(req,res,next) =>{
    res.clearCookie('token');

    const token = req.cookie.token || req.headers.authorization.split(' ')[1];

    res.status(200).json({messgae:'Logged out'});
}


module.exports = { resgisterController , loginController, getUserProfile ,logoutUser};
