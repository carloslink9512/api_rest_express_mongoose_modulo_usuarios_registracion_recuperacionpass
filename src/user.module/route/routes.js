'use strict';

const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../other/token/jwt');

//...we import the functions...
const ip = require('../../other.module/ip/ip_capture');

//...we imports the controllers...
const errorController = require('../../error.module/controller/error_controller');
const userRegisterController = require('../controller/user_register_controller');
const userRegisterConfirmController = require('../controller/user_register_confirm_controller');
const userRegisterCodeRecoveryController = require('../controller/user_register_code_recovery_controller');
const userRecoveryController = require('../controller/user_recovery_controller');
const userRecoveryConfirmController = require('../controller/user_recovery_confirm_controller');
const userRecoveryChangeController = require('../controller/user_recovery_change_controller');

//...middleware...
router.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST'],
    credentials: true
}));
router.use((req, res, next) => {
    next();
});

//...ROUTES...
//...user register...
router.post('/user_register', (req, res) => {
    try {
        userRegisterController.manager(req, res);
    } 
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0001'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0001',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});

//...user registration confirmation...
router.post('/user_register_confirm', (req, res) => {
    try {
        userRegisterConfirmController.manager(req, res);
    }
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0030'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0030',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});

//...
router.post('/user_register_code_recovery', (req, res) => {
    try {
        userRegisterCodeRecoveryController.manager(req, res);
    } 
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0054'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0054',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});

//...password recovery...
router.post('/user_recovery', (req, res) => {
    try {
        userRecoveryController.manager(req, res);
    } 
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0065'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0065',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});

//...
router.post('/user_recovery_confirm', (req, res) => {
    try {
        userRecoveryConfirmController.manager(req, res);
    } 
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0077'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0077',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});

//...
router.post('/user_recovery_change', (req, res) => {
    try {
        userRecoveryChangeController.manager(req, res);
    } 
    catch (error) {
        //...we send the answer to the client...
        res.json(JSON.stringify({code: 'USER0084'}));

        //...we log the error...
        let objParameterError = {
            errorCode: 'USER0084',
            ipCode: ip.IpCapture(req),
            date: Date.now(),
            readForAdmin: false,
            enabled: true
        };

        errorController.manager(objParameterError);
    }
});




//....we export the "router"...
module.exports = router;