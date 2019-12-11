const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => {  //TODO update readme with body and new route
    const {playerSocketId,gameId} = req.body;
    
    res.status(200).json('holaa')
  });

module.exports = router;