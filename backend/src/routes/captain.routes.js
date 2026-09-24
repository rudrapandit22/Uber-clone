const captainController = require('../controllers/captain.controller.js')
const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller.js')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('Password should be strong'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 character long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be atleast more than 1'),
    body('vehicle.vehicleType').isIn(['car','motorcyle','auto']).withMessage('Invalid Type of vehicle'),

],
    captainController.registerCaptain  
)



module.exports = router;