const express = require('express');
const router = express.Router();
const Player = require('./../../models/Player');

router.patch('/', (req,res,next) => {  //TODO update this route in readme merge both routes addplayer and patch player
    console.log(req.body);
    res.status(200).send();
});

module.exports = router;