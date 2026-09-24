const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');


module.exports.registerCaptain = async(requestAnimationFrame,res,next)=>{
    const errors = validationResult(req);

    if(!error.isEmpty){
        return res.status(400).json({errors:error.array});
    }

    const {fullname, email,password,vehicle} = req.body;
}