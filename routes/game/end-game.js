const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');

router.patch('/', (req,res,next) => { //TODO update route in readme
    const {gameId:_id} = req.body;
    Game.updateOne({_id},{gameFinished:true})
        .then(() =>res.status(200).send())
        .catch(err => res.status(400).json(err));    
});

module.exports = router;