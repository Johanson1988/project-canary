const express = require('express');
const router = express.Router();
const Player = require('./../../models/Player');

router.patch('/', (req,res,next) => {  //TODO update this route in readme merge both routes addplayer and patch player
    const {playerId:_id, score} = req.body;
    Player.updateOne({_id},{score})
        .then(()=>res.status(200).send())
        .catch(err => res.status(400).json(err));    
});

module.exports = router;