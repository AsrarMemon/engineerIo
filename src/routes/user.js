const express = require('express');
const router = express.Router()
const { celebrate } = require('celebrate');
const validate = require('../validators/user');
const userService = require('../services/users');

router.post('/user',celebrate(validate.createUser), (req, res) => {
    return userService.createUser(req.body).then((data) => {
        res.status(200).json(data);    
    }).catch(e => {
        res
        .status(500).json({error: e})
    }) 
    
})

module.exports = router;