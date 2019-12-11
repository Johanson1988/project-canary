const express = require('express');
const router = express.Router();
const Game = require('./../../models/Game');
const Player = require('./../../models/Player');

router.post('/', (req,res,next) => {  //TODO update this route in readme
    const {player} = req.body;
    Game.findOne({_id:player.gameId})
        .then(() => {
            Player.create(player)
                .then(player =>{                
                    Game.updateOne({_id:player.gameId}, {$push:{players:player._id}})
                        .then(gameFound => {
                            res.status(201);
                        })
                        .catch(err => res.status(400).json(err));

                } )
                .catch( err => res.status(400).json(err))
            
        })
        .catch( err => res.status(400).json(err));
    
});


module.exports = router;