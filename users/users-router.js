const bcryptjs = require('bcryptjs');

const router = require('express').Router();

const Users = require('./users-model.js');

router.post('/',(req,res) => {
    const user = req.body;
    console.log('user: ', user);
    Users.add(user)
        .then(user => {
            console.log("user: ", user)
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;